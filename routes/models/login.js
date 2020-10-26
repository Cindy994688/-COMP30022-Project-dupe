const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let login = new Schema({
  user: String,
  password: String
});

module.exports = mongoose.model('login', login);
