const express = require('express');
const router = express.Router();
var Productos = require('../model/producto.model.js');

/* FIND ALL */
router.get('/productos', (req, res) => {
  Productos.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* SAVE */
router.post('/productos', function(req, res, next) {
  console.log('express post producto->');
  Productos.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.put('/productos', function(req, res, next) {
  Productos.findByIdAndUpdate({'_id':req.body._id}, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
    //console.log('actualizado->'+post);
  });
});


module.exports = router;
