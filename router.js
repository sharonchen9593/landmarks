var Authentication = require('./controllers/authentication');
var passportService = require('./services/passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireSignin = passport.authenticate('local', {session: false});

module.exports=function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({hi:'there'});
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};