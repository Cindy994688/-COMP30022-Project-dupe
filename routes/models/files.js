const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let files = new Schema({
  type_length:Number,
  type_chunkSize:Number,
  type_uploadDate:Date,
  type_filename:String,
  type_md5:String
});

module.exports = mongoose.model('files', files);
