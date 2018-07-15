var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
  rutCliente: String,
  razonSocialCliente: String,
  nombresCliente: String,
  apellidoPaternoCliente: String,
  apellidoMaternoCliente: String,
  direccionCliente: String,
  comunaCliente: String,
  fonoCliente: String,
  emailCliente: String,
  idEstado: Number
});

module.exports = mongoose.model('cliente', clienteSchema);
