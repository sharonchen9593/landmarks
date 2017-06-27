var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//Define model

var userSchema = new Schema({
	username: {type: String, unique: true, lowercase: true},
	password: String
});

// On save hook, encrypt password

// run this before saving
userSchema.pre('save', function(next) {
	//get access to user model
	var user = this;
	
	// generate a salt, then run callback
	bcrypt.genSalt(10, function(err, salt){
		if (err) {return next(err);}
		
		// encrypt password with the salt
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) {return next(err);}
			
			// overwrite plain text password with encrypted password
			user.password = hash;
			next();
		});
	});
});


//create the model class
var ModelClass = mongoose.model('user', userSchema);

//export the model
module.exports = ModelClass;