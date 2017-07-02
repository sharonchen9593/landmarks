var fs = require('fs');
var util = require('util');
var mime = require('mime');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var gcloud = require('google-cloud');

const Vision = require('@google-cloud/Vision');

const vision = Vision();


// Get the uploaded image
// Image is uploaded to req.file.path
app.post('/upload', upload.single('image'), function(req, res, next) {


  vision.detectLandmarks(req.file.path)
    .then((results) => {
      console.log(results);
      const landmarks = results[0];

      console.log('Landmarks:');
      landmarks.forEach((landmark) => res.send(landmark));
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });

});



// Turn image into Base64 so we can display it easily

function base64Image(src) {
  var data = fs.readFileSync(src).toString('base64');
  return util.format('data:%s;base64,%s', mime.lookup(src), data);
}
