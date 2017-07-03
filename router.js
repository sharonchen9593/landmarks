var Authentication = require('./controllers/authentication');
var passportService = require('./services/passport');
var passport = require('passport');
var User = require('./models/user');



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

  app.post('/favorite', function(req, res) {
    var body = req.body
    console.log(body)
    User.findOneAndUpdate({username:body.username},{$push:{destinations:body.name}}, (err,user) => {
      console.log("err", err)
      console.log("user", user)
      res.json(user)
  })
  })

  app.post('/userData', function(req, res) {
    var body =req.body;
    User.findOne({username:body.username}, function(err, user) {
      res.json(user)
    })
  })

};
