const express = require('express');
const router = express.Router();
var Pedido = require('../model/pedido.model.js');

/* FIND ALL */
router.get('/', (req, res) => {
  res.send('funciona la wea');
});

router.get('/getPedidos', function(req, res, next) {
  console.log('find pedidos...');
  Pedido.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.get('/getPedido/:id', function(req, res, next) {
  console.log('find pedido->'+req.params.id);
  Pedido.findOne({numeroPedido: req.params.id}, function (err, data) {
    if (err) return next(err);
    res.json(data);
    //console.log('pedido->'+data);
  });
});

router.get('/countPedidos', function(req, res, next) {
  //console.log('total pedidos', count);
/*   Pedido.countDocuments({ type: 'number' }, function (err, count) {
    if (err) return next(err);
    console.log('existen [%d] pedidos', count);
    res.json(count)
  });
 */
  Pedido.count({}, function(err, count){
    res.json(count);
  });
});

/* SAVE */
router.post('/addPedido', function(req, res, next) {
  Pedido.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/putPedido/:id', function(req, res, next) {
  console.log(' req.params.id-> ', req.params.id);

  Pedido.findByIdAndUpdate({'numeroPedido':req.params.id}, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
    //console.log(post);
  });

/*  Pedido.findById(numeroPedido, req.body.numeroPedido, function (err, tank) {
  if (err) return handleError(err);

  //tank.set({ _id: req.body._id });
  tank.save(function (err, pedido) {
    if (err) return handleError(err);
    res.send(pedido);
  });
}); */
 });

router.get('/deletePedido', function(req, res, next) {
  Pedido.findByIdAndRemove(req.param._id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
