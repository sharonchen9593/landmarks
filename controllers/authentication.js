var User = require('../models/user');

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
			res.json(user);
			
		});
	});
	
	
	
	// see if user with username exists
};