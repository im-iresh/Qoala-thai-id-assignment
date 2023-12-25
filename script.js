const GOOGLE_VISION_API_KEY = 'AIzaSyBTApC72b0awPLw2Miroh3te9BSI67rAZ4';
const vision = require('@google-cloud/vision');


async function detectText(imagePath) {
    try {
        const client = new ImageAnnotatorClient();

        const [result] = await client.textDetection(imagePath);

        const detections = result.textAnnotations;
        // detections.forEach((text) => receivedText += (text.description + '\n') || '');
        const detected = detections[0].description;
        // console.log(detected);
        const structured = GetDetailsOfCard(detected);
        console.log('structured data:', structured);
        return structured;

    } catch (error) {
        console.error('Error detecting text using vision api:', error);
        return error;
    }
}



function GetDetailsOfCard(ocrData) {

    const lines = ocrData.split('\n');
    console.log("lines", lines);

    const structuredData = {
        name: lines.find(line => line.includes('Name'))?.split('Name')[1]?.trim(),
        lastName: lines.find(line => line.includes('Last name'))?.split('Last name')[1]?.trim(),
        dateOfBirth: lines.find(line => line.includes('Date of Birth'))?.split('Date of Birth')[1]?.trim(),
        identificationNumber: null,
        dateOfIssue: null,
        dateOfExpiry: null,
    };

    for (let i = 0; i < lines.length; i++) {

        const line = lines[i];
    
        if (line.includes('Thai National ID Card')) {
          structuredData.identificationNumber = lines[i + 1].trim();
        }

        if (line.includes('Expiry' || 'expiry')) {
            structuredData.dateOfExpiry = lines[i - 1].trim();
        }

        if (line.includes('Date of Issue')) {
            structuredData.dateOfIssue = lines[i - 1].trim();
        }
    }

    return structuredData;
}

async function processImage() {
    const inputElement = document.getElementById('imageInput');
    console.log("got image")
    const file = inputElement.files[0];

    if (file) {
        const structuredData = await detectText(file);
        displayJsonOutput(structuredData)
    } else {
        console.log("got no file or got invalid file")
        console.error('No file selected.');
    }
}

function displayJsonOutput(jsonResult) {
    const jsonOutputElement = document.getElementById('jsonOutput');
    jsonOutputElement.textContent = JSON.stringify(jsonResult, null, 2);
}
