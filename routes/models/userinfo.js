const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let users = new Schema({
  name: String,
  description: String,
  email: String,
  skills: [String]
});

module.exports = mongoose.model('users', users);
