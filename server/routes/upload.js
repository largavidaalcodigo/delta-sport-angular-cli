var Imagen = require('../model/imagen.model');
const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
//const upload = multer({storage: storage})

var upload = multer({dest: './upload/',
  storage: storage
}).single('file');

router.get('/', function (req, res, next) {

});

router.post('/', function (req, res, next) {
  var path = '';
  //console.log('file->' + JSON.stringify(req));
  upload(req, res, function (err) {
     if (err) {
       // An error occurred when uploading
       console.log(err);
       return res.status(422).send("an Error occured")
     }
     //return res.status(200).send(path);
    });

    const data = {
      mimetype: req.file.mimetype,
      titulo: req.titulo,
      path: req.file.path,
      size: req.file.size
    };

    Imagen.create(data, function (err, post) {
      if (err) {
        return next(err);
      }
      else {
        res.redirect('/upload/'+post._id)
      }
      //res.json(post);
    });


  });

/*   imagen.save(function(err) {
    if (!err){
      res.redirect('/upload/'+imagen._id)
    }else{
      console.log(imagen);
      res.render(err);
    }
 */

/*   if (!req.file)
  return res.status(400).send('Error: ningun archivo fue subido.'); */
/*   }); */

module.exports = router;
