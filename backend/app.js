const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const uri = "mongodb+srv://thales:flamengo@psw.tuxkh.mongodb.net/psw?retryWrites=true&w=majority";
mongoose.connect(uri);

const eventosRouter = require('./routes/eventos');
const vendasRouter = require('./routes/vendas');
const ingressosRouter = require('./routes/ingressos');
const comprasRouter = require('./routes/compras');

const app = express();

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
