const express = require('express');
const router = express.Router();
const multer = require('multer');
var upload = multer({dest: './upload/'}).single('file');

router.get('/', function (req, res, next) {

});

router.post('/', function (req, res, next) {
  var path = '';
    //console.log('req->' + JSON.stringify(req.file));
  upload(req, res, function (err) {
     if (err) {
       // An error occurred when uploading
       console.log(err);
       return res.status(422).send("an Error occured")
     }
    // No error occured.
     //path = req.file.path;
     return res.status(200).send("Upload Completed for ");
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
