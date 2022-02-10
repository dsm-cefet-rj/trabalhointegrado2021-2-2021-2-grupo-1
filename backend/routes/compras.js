const express = require("express");
const router = express.Router();

const Compras = require("../models/compras");

router.route("/")
  .get(async (req, res, next) => {
    try {
      const compras = await Compras.find({});
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.json(compras);
    } catch (err) {
      res.status(400).send({ error: err });
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const compra = await Compras.create(req.body);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.json(compra);
    } catch (err) {
      res.status(406).send({ error: err });
      next(err);
    }
  })

router.route("/:id")
  .delete(async (req, res, next) => {
    try {
      await Compras.deleteOne({ _id: req.params.id }, req.body);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.json(req.body);
    } catch (err) {
      res.status(406).send({ error: err });
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      await Compras.updateOne({ _id: req.params.id }, req.body);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.json(req.body);
    } catch (err) {
      res.status(406).send({ error: err });
      next(err);
    }
  })

module.exports = router;
