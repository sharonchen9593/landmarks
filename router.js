var Authentication = require('./controllers/authentication');
var passportService = require('./services/passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});

module.exports=function(app) {
  app.get('/account', requireAuth, function(req, res) {
    res.send({hi:'there'});
  });
  app.get('/signin', function(req, res){
	  res.sendFile(__dirname + '/public/index.html');
  });
  app.get('/signup', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};