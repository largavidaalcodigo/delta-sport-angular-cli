const express = require('express');
const router = express.Router();
var Productos = require('../model/producto.model.js');

/* FIND ALL */
router.get('/', (req, res) => {
  res.send();
});

/* router.get('/productos/:tipo', function(req, res, next) {
  console.log('express tipo->'+req.params.tipo);
    var query = {
      'descripcion': req.params.tipo
    };

    Productos.find(query, function (err, data) {
      if (err) return next(err);
      res.json(data);
    });
}); */

/* SAVE */
router.post('/productos', function(req, res, next) {
  console.log('express post producto->');
  Productos.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
