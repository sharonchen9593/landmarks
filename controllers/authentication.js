var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../config');

function tokenForUser(user) {
	var timestamp = new Date().getTime();
	return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signin = function(req, res, next) {
	// already signed in, need to give them token

	res.send({token: tokenForUser(req.user)})
};

exports.signup = function(req, res, next) {

	var username = req.body.username;
	var password = req.body.password;

	if (!username || !password) {
		return res.status(422).send({error: 'Username and Password Required'})
	}

	User.findOne({username: username}, function(err, existingUser) {
		if (err) { return next(err); }

		//if username does exist, return error
		if (existingUser) {
			return res.status(422).send({error: 'Username Already Exists'}); // unprocessable entity status
		}

		//if username doesn't exist, create and save user record
		const user = new User({
			username: username,
			password: password
		});

		user.save(function(err){
			if (err) { return next(err)}
			//respond to request indicating user created
			res.json({token: tokenForUser(user)});

		});
	});



	// see if user with username exists
};