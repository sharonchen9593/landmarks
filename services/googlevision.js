var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client.init({
      'apiKey': 'GNyj_uqFRG2Hn1oDK3Ct52j9',
      'clientId': '1044310693183-9b3ph0m60jghvmpkvpiipq3959h3mhq7.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}

// Imports the Google Cloud client library
const Vision = require('@google-cloud/vision');

// Instantiates a client
const vision = Vision();

// The path to the local image file, e.g. "/path/to/image.png"
// const fileName = '/path/to/image.png';
const fileName = '../pictures/Newgrange.jpg';
// Performs landmark detection on the local file
vision.detectLandmarks(fileName)
  .then((results) => {
    const landmarks = results[0];

    console.log('Landmarks:');
    landmarks.forEach((landmark) => console.log(landmark));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
