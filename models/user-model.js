const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const providerSchema = new Schema({
	    type: String,
    	profileId:String
});
const userSchema = new Schema({
    username: String,
    password: String,
    providers: [providerSchema],
    thumbnail: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;