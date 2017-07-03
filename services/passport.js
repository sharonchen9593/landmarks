var passport = require('passport');
var User = require('../models/user');
var config = require('../config');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local');

//create local strategy. check if need usernameField
var localLogin = new LocalStrategy({usernameField: 'username'}, function(username, password, done) {
	// verify this username and password.
	User.findOne({username}, function(err, user) {
		if (err) { return done(err); }
		//call done with false if incorrect
		if (!user) { return done(null, false)}

		// call done with username if correct username and pw
		//compare password === user.password
		user.comparePassword(password, function(err, isMatch){
			if(err) {return done(err);}
			if (!isMatch) {return done(null, false);}

			return done(null, user);
	})
	})
});

//Set up options for JWT strategy
var jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// create JWT strategy. Payload is user id and timestamp. done is callback function if success
var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	// see if user ID in payload exists in db
	// if it does, call done with user
	// otherwise, call done without user
	User.findById(payload.sub, function(err, user) {
		if (err) { return done(err, false); } // failed search

		if (user) {
			done(null,user);
		} else {
			done(null, false); // succeeded search, but no user found
		}
	})
});

//Tell passport to use strategy
passport.use(jwtLogin);
passport.use(localLogin);