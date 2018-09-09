var searchable = require('mongoose-searchable');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = new Schema({
  numeroCliente: Number,
  rutCliente: String,
  razonSocialCliente: String,
  nombresCliente: String,
  apellidoPaternoCliente: String,
  apellidoMaternoCliente: String,
  direccionCliente: String,
  comunaCliente: String,
  fonoCliente: String,
  emailCliente: String,
  idEstado: Number,
  estado: String
});

/* clienteSchema.plugin(searchable, {
  keywordField:'keywords',
  //fields:['title','authors'],
  blacklist:['estado'],
  extract: function(content, done){
      //done(null, content.split(' '));´
      console.log(content);
  }
});
 */
module.exports = mongoose.model('cliente', clienteSchema);
