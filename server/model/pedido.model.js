var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pedidoSchema = new Schema({
  numeroPedido: Number,
  fechaCreacion: Date,
  fechaEntrega: Date,
  listaProductos: [{
    id: Number,
    idProducto: Number,
    descProducto: String,
    idTipoProducto: Number,
    descTipoProducto: String,
    idRangoPrecio: Number,
    descRangoPrecio: String,
    cantidad: Number,
    valor: Number,
    subTotal: Number,
    llevaDiseno: Number,
    idColor: Number,
    listaAdicionales: [{
      id: Number,
      desc: String,
      valor: Number,
      checked: Boolean
    }],
    totalAdicionales: Number,
    listaDetalleTallas: [{
      numero: String,
      talla: String,
      generoPrenda: Number,
      nombrePecho: String,
      nombreEspalda: String,
      terminadoCorte: Number,
      terminadoDiseno: Number,
      terminadoConfeccion: Number,
      terminadoEstampado: Number,
      listaComentarios: [{
        fechaCreacion: Date,
        desc: String
      }]
    }],
    fichaTecnica: {
      listaTipoProducto: [{
        colorTela: String,
        tipoTela: String,
        descTela: String
      }],
      listaTipoCuello: [{
        colorTela: String,
        tipoTela: String,
      }],
      listaTerminacion:[String],
      listaEstampado:[String],
      listaImg: [{
        fechaCreacion: String,
        img: String,
        desc: String
      }],
      listaComentarios: [{
        fechaCreacion: Date,
        desc: String
      }]
    },
    total: Number,
    tipoJugador: String,
  }],
  cliente: {
    rutCliente: String,
    razonSocialCliente: String,
    nombresCliente: String,
    apellidoPaternoCliente: String,
    apellidoMaternoCliente: String,
    direccionCliente: String,
    comunaCliente: String,
    fonoCliente: String,
    emailCliente: String,
    estadoCliente: Number
  },
  idUsuario: Number,
  idEstado: Number,
  subTotal: Number,
  descuento: Number,
  subTotalNeto: Number,
  iva: Number,
  total: Number,
  listaComentarios: [{
    fechaCreacion: Date,
    desc: String
  }],
  listaMediosPago: [{
    idMedioPago: Number,
    fechaPago: Date,
    tipoPago: String,
    montoPago: Number
  }],
  totalMediosPago: Number,
  totalPagoPendiente: Number,
  tipoDeporte: String,
  avanceCorte: Number,
  itemsTerminadosCorte: Number,
  avanceDiseno: Number,
  itemsTerminadosDiseno: Number,
  avanceConfeccion: Number,
  itemsTerminadosConfeccion: Number,
  avanceEstampado: Number,
  itemsTerminadosEstampado: Number,
  totalItems: Number

});

module.exports = mongoose.model('pedido', pedidoSchema);
