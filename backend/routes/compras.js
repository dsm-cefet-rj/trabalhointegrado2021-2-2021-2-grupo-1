const express = require('express');
const router = express.Router();

const bodyParser = require("body-parser");
const Compras = require('../models/compras');
const authenticate = require("../authenticate");

router.use(bodyParser.json());

router.route("/")
  .get(authenticate.verifyUser, async (req, res, next) => {
    try {
      const compras = await Compras.find({});
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.json(compras);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })
  .post(authenticate.verifyUser, async (req, res, next) => {
    const userIsCliente = req.user.tipo === "cliente";

    try {
      const compra = await Compras.create(req.body);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.json(compra);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })

router.route('/:id')
  .delete(async (req, res, next) => {
    try {
      await Compras.deleteOne({ _id: req.params.id }, req.body);
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(req.body);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      await Compras.updateOne({ _id: req.params.id }, req.body);
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(req.body);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })

module.exports = router;
