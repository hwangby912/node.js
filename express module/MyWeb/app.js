var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// 동적 view, ejs, pug, jsp, asp, php 등과 같은 file
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
// js, css, img 같은 것
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('Study Hard'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'Study Hard',
  cookie: {
    httpOnly: true,
    secure: false
  }
}));
app.use(express.static(path.join(__dirname, 'public')));

// routing code
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/about', require('./routes/about'));
app.use('/member_insert', require('./routes/member_insert'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/search_carinfo_template', require('./routes/search_carinfo_template'));
app.use('/search_carinfo', require('./routes/search_carinfo'));

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

module.exports = app;
