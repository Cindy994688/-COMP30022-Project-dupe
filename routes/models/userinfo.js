const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let users = new Schema({
  name: String,
  description: String,
  contact: [String],
  skills: [String],
  fullname: String,
});

module.exports = mongoose.model('users', users);
