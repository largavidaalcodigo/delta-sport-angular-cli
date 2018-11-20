var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
  id:Number,
  desc: String,
  estado: String,
  tipoProducto: [{
    id:Number,
    desc: String,
    estado: String,
    rangoPrecio: [{
      id:Number,
      desc: String,
      valor: String,
      estado: String
    }]
  }]
});

module.exports = mongoose.model('producto', productoSchema);
