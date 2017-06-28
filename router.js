var Authentication = require('./controllers/authentication');
var passportService = require('./services/passport');
var passport = require('passport');

var requireAuth = passport.authenticate('jwt', {session: false});

module.exports=function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({hi:'there'});
  });
  app.post('/signup', Authentication.signup);
};