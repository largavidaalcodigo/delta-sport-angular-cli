const express = require('express');
const router = express.Router();
var Cliente = require('../model/cliente.model.js');

router.get('/getClientes', function(req, res, next) {
  console.log('find clientes...');
  Cliente.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

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
    if (err) return next(err);
    res.json(post);
  });
});
 */

module.exports = router;
