const express = require('express');
const router = express.Router();
var Pedido = require('../model/pedido.model.js');

/* FIND ALL */
router.get('/', (req, res) => {
  res.send('funciona la wea');
});

router.get('/getPedidos', function(req, res, next) {
  console.log('find pedido...');
  Pedido.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.get('/countPedidos', function(req, res, next) {
  console.log('total pedidos', count);
  Pedido.countDocuments({ type: 'number' }, function (err, count) {
    if (err) return next(err);
    console.log('existen [%d] pedidos', count);
    res.json(count)
  });
});

/* SAVE */
router.post('/addPedido', function(req, res, next) {
  Pedido.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/putPedido', function(req, res, next) {
  Pedido.findByIdAndUpdate(req.param._id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
 });

router.get('/deletePedido', function(req, res, next) {
  Pedido.findByIdAndRemove(req.param._id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
