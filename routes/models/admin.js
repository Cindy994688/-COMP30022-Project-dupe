const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');


let admin = new Schema({
  username: String,
  password: String
});

admin.plugin(passportLocalMongoose);

module.exports = mongoose.model('admins', admin);
