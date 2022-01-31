const express = require('express');
const router = express.Router();

const Eventos = require('../models/eventos');

router.route('/')
  .get(async (req, res, next) => {
    try {
      const eventos = await Eventos.find({});
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(eventos);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const evento = await Eventos.create(req.body);
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(evento);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })

router.route('/:id')
  .delete(async (req, res, next) => {
    try {
      const evento = await Eventos.deleteOne({ id: req.params.id });
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(evento);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      await Eventos.updateOne({ id: req.params.id }, req.body);
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.json(req.body);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })

module.exports = router;
