const express = require('express');
const router = express.Router();
var Pedido = require('../model/pedido.model.js');

/* FIND ALL */
router.get('/', (req, res) => {
  res.send('funciona la wea');
});

router.get('/getPedidos', function(req, res, next) {
  console.log('/getPedidos...');
  Pedido.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.get('/getPedido/:id', function(req, res, next) {
  console.log('/getPedido/:id->'+req.params.id);
  Pedido.findOne({numeroPedido: req.params.id}, function (err, data) {
    if (err) return next(err);
    res.json(data);
    //console.log('pedido->'+data);
  });
});

router.get('/countPedidos', function(req, res, next) {
  console.log('/countPedidos...');
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



router.put('/putPedido', function(req, res, next) {
  console.log('/putPedido/:id->'+req.body._id);
  Pedido.findByIdAndUpdate({'_id':req.body._id}, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
    console.log('actualizado->'+post);
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
