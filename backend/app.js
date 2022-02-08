const express = require("express");
const passport = require("passport");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const usuariosRouter = require("./routes/usuarios");
const eventosRouter = require("./routes/eventos");
const vendasRouter = require("./routes/vendas");
const ingressosRouter = require("./routes/ingressos");
const comprasRouter = require("./routes/compras");

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@psw.tuxkh.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(uri);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(passport.initialize());

app.use("/usuarios", usuariosRouter);
app.use("/eventos", eventosRouter);
app.use("/vendas", vendasRouter);
app.use("/ingressos", ingressosRouter);
app.use("/compras", comprasRouter);

module.exports = app;