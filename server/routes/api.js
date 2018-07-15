const express = require('express');
const router = express.Router();
var Pedido = require('../model/pedido.model.js');

/* FIND ALL */
router.get('/', (req, res) => {
  res.send('delta sport works!');
});

router.get('/getPedidos', function(req, res, next) {
  console.log('find pedido...');
  Pedido.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

router.get('/getClientes', function(req, res, next) {
  console.log('find clientes...');
  Cliente.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});


/* SAVE */
router.post('/addPedido', function(req, res, next) {
  Pedido.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.post('/addCliente', function(req, res, next) {
  Cliente.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});




// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};




module.exports = router;
