var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imgSchema = new Schema({
  title: String,
  creator: String,
  extension: String
});

module.exports = mongoose.model('imagen', imagenSchema);
