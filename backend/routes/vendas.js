const express = require('express');
const router = express.Router();

const Vendas = require('../models/vendas');

router.route('/')
  .get(async (req, res, next) => {
    try {
      const vendas = await Vendas.find({});
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(vendas);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const venda = await Vendas.create(req.body);
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(venda);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })

router.route('/:id')
  .delete(async (req, res, next) => {
    try {
      const venda = await Vendas.deleteOne({ id: req.params.id });
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(venda);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      await Vendas.updateOne({ id: req.params.id }, req.body);
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(req.body);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })

module.exports = router;
