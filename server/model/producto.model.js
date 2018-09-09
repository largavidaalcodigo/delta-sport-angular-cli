var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = new Schema({
  listaTipoProducto: [{
    descripcion: String,
    tipoProducto: [{
      descripcion: String
    }]
  }]
});

module.exports = mongoose.model('producto', productoSchema);
