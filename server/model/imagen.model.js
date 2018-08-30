var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imagenSchema = new Schema({
  titulo: String,
  mimetype: String,
  path: String,
  size: Number
});

module.exports = mongoose.model('imagenes', imagenSchema);
