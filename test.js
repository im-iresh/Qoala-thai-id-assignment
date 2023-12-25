const vision =require("@google-cloud/vision");
const CREDENTIALS = JSON.parse(JSON.stringify({
    "type": "service_account",
    "project_id": "thai-id-ocr-app",
    "private_key_id": "5690f74328eac1a9361607b356eb15e44b3da5ee",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDcKMd3kT0H1Ew+\nwIr1XSiLB1Cc6fMU5x0cC7DQkdEwWdhtfk8tp5P2dJDWMIXXPL7Aqe/KgvvO1hMN\njDIvZvjnf33tkCFZugDjPw+1Yv7V4nJ2mx7Vtlf8gQrdghYWo1SiunYdlrVDAO1p\nTdU8ZFjuv3QlGlHSvsLRGR5dhtMCVEvrc/lK7aJ3TD8xtIWTfg1yKXCB4aVr+Jbs\ny6QUXxlHN1MYylxleiOzXJIR1YDyPVBtzrk3jsJhCoM2NhSV3HlMQA8yw3x5Cnqh\nF2SVptc4Zb45zW0waMPsnV5MKsQAmCKYF4aTAaRr0jtY5jWb2/awUVs0pxP2er8E\nyfIO4ZazAgMBAAECggEAThozZRIDvi7M26gvw8rIMsYmDXybbStuMsBc+ij4trfw\n5SsdiLs97P0+UpYFLS3SGARRWpzsGtzsBm7ZcOKNY4bhlDEA+9VWMkfxWS5k7Fi4\ntaXjIvrcrOnUgm9/SYmo4U/XzjhkVoBSOPzRLGsG96+40t7K70IYV9ia4qANZHH9\nn65idRYnTfXh6f/W5b4axiLyJp6FfYgOxjjjPRizHsTEtZmpQwNn8OI+KLvBaZKR\nno0SRLdmRHRWyu3kYGOIaqknVl3UwB0W7KE2WpfMdANZF20j5GMAVIdEj7xn4yrS\nU89wpUWDqdTEFUtTQT7WnjXbLTZOTeAfj/9w2xiA5QKBgQD4Govcwl9+OKU2PZcp\ncbkbVyTYXgUC13f5b/v1mPLhKZ7ndfRgQdpfygFTTGreb9F6RFc+QlBVPhYy+MPh\nnOaAi5X+rjsQQMoHR8wNmnYI1Z8SmajcwSrGG0voDiyW5oNDetjctBXpN5CawTpX\nYsdbQ54KJfvJyKHQ2rj9aKSadwKBgQDjKo102laQl3Q8tkeZZAGC8QIzpcdT3hD4\nrW8ax+fexz4w7rP5NrzAkQedw2LN7BPQBwy94/+w/k2X5B4OJg6tTwTk6fmsy1ac\nGoN9kNyBa80/klrBvGcgSvBjVKudSsOqYZN3FfUebQTPHmW3bMrmrFVPwdtMKLj6\nJJf+/QA4pQKBgHRkN8Lr6NKVDmSAxl5p/HXoDt/2U5F+tcjuERypkR+yX9qkCm3x\n1tljMfX6/pO1j2c1klwhzf//bXiiHXrFGZmqYkalRA4e5ug9dWvYT5FbbhHSxlYx\nxLhFa/nEVITCRUgt5Hi9fx32tD71cUI3k+CruwN1yEZkeg053tj682WHAoGBAJmP\nlFwflFDd8PdxiOkKD3OClChxslLhVLumEesao4WXTlUpp4OaGvJZl7pv8ASfx6zi\ndxyOWbQ91BoPXLnXxCgnuHk+KUdDlWKlEan6GPVr+C03NB6uy0+rGOEsxW3osmgk\n2diwgSh2LcANHllmM6rHaEwoEaRkCtcdkZoPUOz5AoGAWAJvICvNcybxk5/4dVk6\ndLDteErYEbgrGw+QLjdO5l0cWgBuQVAHBhYAn+WulZ8DbnAOZrvjiddmAFCTAT7x\nGOEldr0f1m25Oznm7k+1iKrwPM+tP6FTPu0fadnLL7GmeEy3+T4Mt4VmB8hBL34k\nJz6cwXC6Y8btpDp9Rq35mbs=\n-----END PRIVATE KEY-----\n",
    "client_email": "thai-id-ocr-app-service-accoun@thai-id-ocr-app.iam.gserviceaccount.com",
    "client_id": "101599989855137366973",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/thai-id-ocr-app-service-accoun%40thai-id-ocr-app.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }));
const CONFIG = {
    credentials : {
        private_key : CREDENTIALS.private_key,
        client_email : CREDENTIALS.client_email
    }
};
const client  = new vision.ImageAnnotatorClient(CONFIG);
const detectText = async (path)=>{
   let [result] = await client.textDetection('thai.jpg');
   console.log(result.textAnnotations);
}
// const detections = result.textAnnotations;
// console.log('Text:');
// detections.forEach(text => console.log(text));
detectText();