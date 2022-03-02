const express = require("express");
const passport = require("passport");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const authenticate = require("./authenticate");

const usuariosRouter = require("./routes/usuarios");
const eventosRouter = require("./routes/eventos");
const vendasRouter = require("./routes/vendas");
const ingressosRouter = require("./routes/ingressos");
const comprasRouter = require("./routes/compras");

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.tuxkh.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;

const conectarNoMongo = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  return mongoose;
};

const conectar = async () => await conectarNoMongo().then(async () => console.log("mongodb conectado"));

conectar();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(passport.initialize());
app.use(bodyParser.json());

app.use("/usuarios", usuariosRouter);
app.use("/eventos", authenticate.verifyUser, eventosRouter);
app.use("/vendas", authenticate.verifyUser, vendasRouter);
app.use("/ingressos", authenticate.verifyUser, ingressosRouter);
app.use("/compras", authenticate.verifyUser, authenticate.checkUserType(), comprasRouter);
module.exports = app;
