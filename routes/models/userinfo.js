const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let users = new Schema({
  type_name: String,
  type_description: String,
  type_email: String,
  type_skills: [String]
});

module.exports = mongoose.model('users', users);
