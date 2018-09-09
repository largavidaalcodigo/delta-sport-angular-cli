const express = require('express');
const router = express.Router();
var Pedido = require('../model/pedido.model.js');

/* FIND ALL */
router.get('/', (req, res) => {
  res.send();
});

  router.get('/pedidos/:tipo/:estado', function(req, res, next) {
  console.log('/tipo->'+req.params.tipo + '/estado->'+ req.params.estado);

  if (req.params.tipo === 'editar'){
    Pedido.findOne({numeroPedido: req.params.estado}, function (err, data) {
      if (err) return next(err);
      res.json(data);
    });
  }else if (req.params.tipo === 'buscar'){
    var query = {
      'estado': req.params.estado
    };

    Pedido.find(query, function (err, data) {
      if (err) return next(err);
      res.json(data);
    });
  }
});

router.get('/pedidos/:tipo/:estado/:query', function(req, res, next) {
  console.log('/tipo->'+req.params.tipo + '/estado->'+ req.params.estado + '/query->' + req.params.query);
  var query = {
    'estado': req.params.estado,
    'cliente.nombresCliente': { $regex: req.params.query, $options: 'i'}
  };

  Pedido.find(query, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});
/*
router.get('/pedidos/:id', function(req, res, next) {
  console.log('/pedidos/:id->'+req.params.id);
  Pedido.findOne({numeroPedido: req.params.id}, function (err, data) {
    if (err) return next(err);
    res.json(data);
    //console.log('pedido->'+data);
  });
});
 */
router.get('/countPedidos', function(req, res, next) {
  console.log('/countPedidos...');
  Pedido.count({}, function(err, count){
    res.json(count);
  });
});

/* SAVE */
router.post('/pedidos', function(req, res, next) {
  Pedido.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/pedidos', function(req, res, next) {
  //console.log('/pedidos/:_id->'+JSON.stringify(req.body) );
  Pedido.findByIdAndUpdate({'_id':req.body._id}, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
    //console.log('actualizado->'+post);
  });
});

/* router.delete('/deletePedido/:id', function(req, res, next) {
  Pedido.findByIdAndRemove({'numeroPedido':req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
 */
module.exports = router;

/* router.get('/putPedido/:id', function(req, res, next) {
  console.log('/putPedido/:id-> ', req.params.id);

 */

/*  Pedido.findById(numeroPedido, req.body.numeroPedido, function (err, tank) {
  if (err) return handleError(err);

  //tank.set({ _id: req.body._id });
  tank.save(function (err, pedido) {
    if (err) return handleError(err);
    res.send(pedido);
  });
});
 });*/
