const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const errorHandler = require('errorhandler');
const session = require('express-session');
//const passport = require('passport');
const routes = require('./server/routes');
const flash = require('connect-flash');
const formidable = require('express-formidable');
var router = express.Router();

//var fs = require('fs');

var app = express();

//app.use('/', express.static('./dist/index.html'));
app.use(express.static(path.join(__dirname, 'dist')));
//app.use('/', routes);
// serve angular front end files from root path
//router.use('/', express.static('app', { redirect: false }));

// rewrite virtual urls to angular app to enable refreshing of internal pages
/* router.get('/', function (req, res, next) {
    res.sendFile(path.resolve('app/index.html'));
});
 */


app.use('/api', require('./server/routes/pedidos'));
app.use('/api', require('./server/routes/clientes'));
app.use('/upload', require('./server/routes/upload'));

app.use(formidable);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

//create a cors middleware
app.use(function(req, res, next) {
  //set headers to allow cross origin request.
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const xssFilter = require('x-xss-protection')
app.use(xssFilter())

app.set('trust proxy', 1) // trust first proxy
app.use( session({
   secret : 's3Cur3',
   name : 'sessionId',
  })
);




  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Parsers
//app.use(bodyParser());
//app.use(bodyParser.json({ extended: false }));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler());
//app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));



//const router = express.Router();

/* app.get('/upload', function (req, res) {
  res.end('file catcher example');
});
 */

/* app.post('/upload', function (req, res) {
console.log('req->' + JSON.stringify(req.file));
  if (!req.file)
  return res.status(400).send('Error: ningun archivo fue subido.');
});

 */

 // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//let sampleFile = req.files.sampleFile;

// Use the mv() method to place the file somewhere on your server
/* sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
  if (err)
    return res.status(500).send(err);

  res.send('File uploaded!');
});
 */
  /*
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }
    res.end('File is uploaded');
  }); */
//Upload files END

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log('Running on localhost:'+port));

// Conexion a Mongodb
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/erp-taller')
  .then(() =>  console.log('Mongodb: Conexion exitosa.'))
  .catch((err) => console.error(err));


/*///passport config
//app.set('view engine', 'ejs');
//app.use(passport.initialize());
//app.use(passport.session());
app.use(flash());



//Upload files START
var DIR = './uploads/';
var upload = multer({dest: DIR});
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});



/*
app.use(
  multer(
    {
      dest: DIR,
      rename: function (fieldname, filename) {
        return filename + Date.now();
      },
      onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...');
      },
      onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
      }
    }
  )
);
*/


//const api = require('./server/routes/api');

// Passport configuration
// require('./server/config/auth');



// Angular DIST output folder
/*
app.get('/', routes.site.loginForm);
app.get('/login', routes.site.loginForm);
app.post('/login', routes.site.login);
app.get('/logout', routes.site.logout);
app.get('/account', routes.site.account);

app.get('/dialog/authorize', routes.oauth2.authorization);
app.post('/dialog/authorize/decision', routes.oauth2.decision);
app.post('/oauth/token', routes.oauth2.token);

app.get('/api/userinfo', routes.user.info);
app.get('/api/clientinfo', routes.client.info); */

// API location
//app.use('/api', api);
// Send all other requests to the Angular app
//app.use(express.static(path.join(__dirname, 'dist')));



// this 3 lines have to be before app.use(app.router)
// https://stackoverflow.com/questions/21877098/upload-file-using-express-failed-cannot-read-property-of-undefined
//app.use(express.multipart());
//app.use(express.bodyParser({ keepExtensions: true, uploadDir: path.join(__dirname, 'public', 'uploads') }));
//app.use(express.methodOverride());

//app.use('/', routes);
