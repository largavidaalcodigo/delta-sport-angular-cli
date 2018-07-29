const express = require('express');
const router = express.Router();
var Pedido = require('../model/pedido.model.js');

/* FIND ALL */
router.get('/', (req, res) => {
<<<<<<< 88b5bf909e45587f0c8ec829cf16ecd2079db74d
  res.send('delta sport works!');
=======
  res.send('funciona la wea');
>>>>>>> ultimos cambios, falta caleta csm!
});

router.get('/getPedidos', function(req, res, next) {
  console.log('find pedido...');
  Pedido.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

<<<<<<< 88b5bf909e45587f0c8ec829cf16ecd2079db74d
router.get('/getClientes', function(req, res, next) {
  console.log('find clientes...');
  Cliente.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});


=======
router.get('/countPedidos', function(req, res, next) {
  console.log('total pedidos', count);
  Pedido.countDocuments({ type: 'number' }, function (err, count) {
    if (err) return next(err);
    console.log('existen [%d] pedidos', count);
    res.json(count)
  });
});

>>>>>>> ultimos cambios, falta caleta csm!
/* SAVE */
router.post('/addPedido', function(req, res, next) {
  Pedido.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
<<<<<<< 88b5bf909e45587f0c8ec829cf16ecd2079db74d
router.post('/addCliente', function(req, res, next) {
  Cliente.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
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
=======

router.put('/putPedido', function(req, res, next) {
  Pedido.findByIdAndUpdate(req.param._id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
 });

router.get('/deletePedido', function(req, res, next) {
  Pedido.findByIdAndRemove(req.param._id, req.body, function (err, post) {
>>>>>>> ultimos cambios, falta caleta csm!
    if (err) return next(err);
    res.json(post);
  });
});
<<<<<<< 88b5bf909e45587f0c8ec829cf16ecd2079db74d
 */
=======


>>>>>>> ultimos cambios, falta caleta csm!

module.exports = router;
