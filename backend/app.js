var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var eventosRouter = require('./routes/eventos');
var vendasRouter = require('./routes/vendas');
var ingressosRouter = require('./routes/ingressos');
var comprasRouter = require('./routes/compras');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use('/eventos', eventosRouter);
app.use('/vendas', vendasRouter);
app.use('/ingressos', ingressosRouter);
app.use('/compras', comprasRouter);


module.exports = app;
