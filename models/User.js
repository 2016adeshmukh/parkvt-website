var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');
    require('mongoose-type-email');

var UserSchema = new mongoose.Schema({
    email: mongoose.SchemaTypes.Email,
    password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);