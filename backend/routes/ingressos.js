const express = require('express');
const router = express.Router();

const Ingressos = require('../models/ingressos');

router.route('/')
  .get(async (req, res, next) => {
    try {
      const ingressos = await Ingressos.find({});
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(ingressos);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const ingresso = await Ingressos.create(req.body);
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(ingresso);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })

  router.route('/:id')
    .delete(async (req, res, next) => {
      try {
        const ingresso = await Ingressos.deleteOne({ id: req.params.id });
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json(ingresso);
      } catch (err) {
        res.statusCode = 404;
        next(err);
      }
    })
  .put(async (req, res, next) => {
    try {
      await Ingressos.updateOne({ id: req.params.id }, req.body);
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(req.body);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })

module.exports = router;
