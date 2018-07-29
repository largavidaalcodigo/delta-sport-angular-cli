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


const app = express();

//const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//passport config
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
//app.use(passport.initialize());
//app.use(passport.session());
app.use(flash());

// Passport configuration
// require('./server/config/auth');



// Angular DIST output folder
/*
app.use(express.static(path.join(__dirname, 'dist')));

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
/* app.use('/api', api);
 */
// Send all other requests to the Angular app
/* app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
}); */



//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('Running on localhost:'+port));

/*
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
*/

// Conexion a Mongodb
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/erp-taller')
  .then(() =>  console.log('Mongodb: Conexion exitosa.'))
  .catch((err) => console.error(err));
