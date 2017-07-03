var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

//Define model

var userSchema = new Schema({
	username: {type: String, unique: true, lowercase: true},
	password: String,
	destinations: [String]
});

// On save hook, encrypt password

// // run this before saving
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

userSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) { return callback(err);}

		callback(null, isMatch);
	})
	// console.log("this", this)
	// console.log("this.password", this.password)
	// console.log("candidatePassword", candidatePassword)
	// if (candidatePassword===this.password) {
	// 	callback(null, true)
	// } else {
	// 	callback("wrong password", false)
	// }
};

//create the model class
var ModelClass = mongoose.model('user', userSchema);

//export the model
module.exports = ModelClass;