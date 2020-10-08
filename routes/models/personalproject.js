const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let personalproject = new Schema({
  name: String,
  projectTitle: String,
  linktogitrepo: String,
  description: String,
  position: Number,
});

module.exports = mongoose.model('personalproject', personalproject);
