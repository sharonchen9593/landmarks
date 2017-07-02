var Authentication = require('./controllers/authentication');
var passportService = require('./services/passport');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var passport = require('passport');
const Vision = require('@google-cloud/Vision');
var request = require('superagent');
var fs = require('fs');
var util = require('util');
var mime = require('mime');

const vision = Vision();

var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});

var currentUser = ""

module.exports=function(app) {
  app.get('/feature', requireAuth, function(req, res) {
    res.send({hi:'there'});
  });

  app.get('/profile', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/account', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/signin', function(req, res){
	  res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/mainpage', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/signup', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });

  app.get('/signout', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });

  app.post('/signin', requireSignin, Authentication.signin, function(req, res) {
    console.log(req)
  });
  app.post('/signup', Authentication.signup);

  app.post('/upload',function(request,response,next){

   console.log('helo')
   });

};
