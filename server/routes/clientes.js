const express = require('express');
const router = express.Router();
var Cliente = require('../model/cliente.model.js');


router.get('/clientes/:tipo/:estado', function(req, res, next) {
  console.log('/tipo->'+req.params.tipo + '/estado->'+ req.params.estado);

  if (req.params.tipo === 'editar'){
    Cliente.findOne({numeroCliente: req.params.estado}, function (err, data) {
      if (err) return next(err);
      res.json(data);
      console.log('cliente->'+data);
    });
  } else if (req.params.tipo === 'buscar'){
    var query = {estado: req.params.estado};
    Cliente.find(query, function (err, data) {
      if (err) return next(err);
      res.json(data);
    });
  }
});


router.get('/clientes/:tipo/:estado/:query', function(req, res, next) {
  var query = {
    estado: req.params.estado,
    nombresCliente: { $regex: req.params.query, $options: 'i'}
  };

  Cliente.find(query, function (err, data) {
    //{"created_on": {"$gte": new Date(2012, 7, 14), "$lt": new Date(2012, 7, 15)}}
    if (err) return next(err);
    res.json(data);
  });
});


//fechaCreacion: { $gte: req.params.fd, $lte: req.params.fh}

/* router.get('/clientes/:id', function(req, res, next) {
  console.log('/clientes/:id->'+req.params.id);
  Cliente.findOne({numeroCliente: req.params.id}, function (err, data) {
    if (err) return next(err);
    res.json(data);
    console.log('pedido->'+data);
  });
});
 */
router.post('/clientes', function(req, res, next) {
  Cliente.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/clientes', function(req, res, next) {
  console.log('/clientes/:id->'+req.body._id);
  Cliente.findByIdAndUpdate({'_id':req.body._id}, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
    console.log('actualizado->'+post);
  });
});

router.get('/countClientes', function(req, res, next) {
  console.log('/countClientes...');
  Cliente.count({}, function(err, count){
    res.json(count);
  });
});


/*
router.put('/:id', function(req, res, next) {
  Pedido.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
 */

module.exports = router;
