var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');




var session = require('express-session');

var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sampledataRouter = require('./routes/sample_data');
var sampledataRouter2 = require('./routes/sample_data2');
var sampledataRouter3 = require('./routes/sample_data3');
var sampledataRouter4 = require('./routes/a_openp');
var sampledataRouter5 = require('./routes/a_cl');
var sampledataRouter6 = require('./routes/a_int');
var sampledataRouter7 = require('./routes/a_salary');
var sampledataRouter8 = require('./routes/a_prof');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs','html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//important file redirectory 
app.use(express.static(path.join(__dirname, 'views')));

app.use(session({
  secret : 'webslesson',
  cookie : {maxAge : 60000},
  saveUninitialized : false,
  resave : false
}));

app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sample_data', sampledataRouter);
app.use('/sample_data2', sampledataRouter2);
app.use('/sample_data3', sampledataRouter3);
app.use('/a_openp',sampledataRouter4);
app.use('/a_cl',sampledataRouter5);
app.use('/a_int',sampledataRouter6);
app.use('/a_salary',sampledataRouter7);
app.use('/a_prof',sampledataRouter8);


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
