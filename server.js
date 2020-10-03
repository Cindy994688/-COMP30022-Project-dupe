// app.js is the file that is actually executed on the server.
// All of the servers functionality is linked to this file

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var IS_HEROKU = process.env.IS_HEROKU || 0

const PORT = process.env.PORT || 5000;
var app = express();

var tryConnect = require('./routes/connected');
var userInfo = require('./routes/users');
var imageMd5 = require('./routes/image');
var checkPassword = require('./routes/password');

const connectDB = require('./config/db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'react/build')));

app.use('/', tryConnect);
app.use('/user/:name', userInfo);
app.use('/image/:name', imageMd5);
app.use('/password/:name', checkPassword);

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

connectDB();

// Lol
app.listen(PORT, function(){
  console.log("Listening on :" + PORT);
});

module.exports = app;
