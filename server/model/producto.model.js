var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
  desc: String,
  estado: String,
  tipoProducto: [{
    desc: String,
    estado: String,
    rangoPrecio: [{
      desc: String,
      valor: String,
      estado: String
    }]
  }]
});

module.exports = mongoose.model('producto', productoSchema);
