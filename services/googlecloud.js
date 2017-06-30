// Imports the Google Cloud client libraries
const Storage = require('@google-cloud/storage');
const Vision = require('@google-cloud/vision');

// Instantiates clients
const storage = Storage();
const vision = Vision();
const bucketName = 'my-bucket'
// The name of the bucket where the file resides, e.g. "my-bucket"
// const bucketName = 'my-bucket';

// The path to the file within the bucket, e.g. "path/to/image.png"
// const fileName = 'path/to/image.png';

// Performs landmark detection on the remote file
vision.detectLandmarks(storage.bucket(bucketName).file(fileName))
  .then((results) => {
    const landmarks = results[0];

    console.log('Landmarks:');
    landmarks.forEach((landmark) => console.log(landmark));
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
