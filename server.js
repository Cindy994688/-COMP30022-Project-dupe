// app.js is the file that is actually executed on the server.
// All of the servers functionality is linked to this file

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const methodOverride = require('method-override');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const connectDB = require('./config/db');
const LocalStrategy = require('passport-local').Strategy;
const IS_HEROKU = process.env.IS_HEROKU || 0;

// Required routes
const tryConnect = require('./routes/connected');
const userInfo = require('./routes/users');
const imageMd5 = require('./routes/image');
const login = require('./routes/login');

// Middleware setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('potatoes'));
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'potatoes'
}));
app.use(express.static(path.join(__dirname, 'react/build')));
app.use(passport.initialize());
app.use(passport.session());

// Routes setup
app.use('/', tryConnect);
app.use('/user/:name', userInfo);
app.use('/image/:name', imageMd5);
app.use('/login', login);


// Passport configuration
var Admin = require('./routes/models/admin');
passport.use(Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

// Runs mongoose config
connectDB();

// Configuration for online / offline functionality
if (IS_HEROKU){
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/react/build/index.html'));
  });
} else {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/react/src/index.html'));
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Starts the server
const PORT = process.env.PORT || 5000;
// Lol
app.listen(PORT, function(){
  console.log("Express server started. Listeninig on port:" + PORT);
});

module.exports = app;
