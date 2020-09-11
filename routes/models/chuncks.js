const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let chuncks = new Schema({
  type_files_id: Schema.Types.ObjectId,
  type_n: Number,
  type_data: String
});

module.exports = mongoose.model('chuncks', chuncks);
