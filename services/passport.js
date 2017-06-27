var passport = require('passport');
var User = require('../models/user');
var config = require('../config');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

//Set up options for JWT strategy
var jwtOptions = {};

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