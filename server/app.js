var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');

mongoose
.connect(`mongodb+srv://admin:adminadmin@cluster0.sm9nd.mongodb.net/bohata?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

const indexRouter = require('./routes/index');
const monkeysRouter = require('./routes/monkeys');
const albumRouter = require('./routes/album');
const bookRouter = require('./routes/book');
const eventRouter = require('./routes/event');
const productRouter = require('./routes/product');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/monkey', monkeysRouter);
app.use('/album', albumRouter);
app.use('/book', bookRouter);
app.use('/event', eventRouter);
app.use('/product', productRouter);

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
