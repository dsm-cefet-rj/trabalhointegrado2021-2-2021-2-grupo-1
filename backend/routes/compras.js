const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const Compras = require("../models/compras");
const authenticate = require("../authenticate");

router.use(bodyParser.json());

router.route("/")
  .get(authenticate.verifyUser, async (req, res, next) => {
    const userIsCliente = req.user.tipo === "cliente";

    try {
      if (userIsCliente) {
        const compras = await Compras.find({});
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.json(compras);
      } else {
        throw "Somente cliente podem requisitar compras."
      }
    } catch (err) {
      res.status(!userIsCliente ? 401 : 400).send({ error: err });
      next(err);
    }
  })
  .post(authenticate.verifyUser, async (req, res, next) => {
    const userIsCliente = req.user.tipo === "cliente";

    try {
      if (userIsCliente) {
        const compra = await Compras.create(req.body);
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.json(compra);
      } else {
        throw "Somente cliente podem criar uma compra."
      }
    } catch (err) {
      res.status(!userIsCliente ? 401 : 400).send({ error: err });
      next(err);
    }
  })

router.route("/:id")
  .delete(async (req, res, next) => {
    const userIsCliente = req.user.tipo === "cliente";
    try {
      if (userIsCliente) {
        await Compras.deleteOne({ _id: req.params.id }, req.body);
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.json(req.body);
      } else {
        throw "Somente cliente podem deletar uma compra."
      }
    } catch (err) {
      res.status(!userIsCliente ? 401 : 400).send({ error: err });
      next(err);
    }
  })
  .put(async (req, res, next) => {
    const userIsCliente = req.user.tipo === "cliente";
    try {
      if (userIsCliente) {
        await Compras.updateOne({ _id: req.params.id }, req.body);
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 200;
        res.json(req.body);
      }
      else {
        throw "Somente cliente podem atualizar uma compra."
      }
    } catch (err) {
      res.status(!userIsCliente ? 401 : 400).send({ error: err });
      next(err);
    }
  })

module.exports = router;
