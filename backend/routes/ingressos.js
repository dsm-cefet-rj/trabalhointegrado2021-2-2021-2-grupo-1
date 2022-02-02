const express = require('express');
const router = express.Router();

const Ingressos = require('../models/ingressos');
const Vendas = require('../models/vendas');

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
    const ingressoExists = await Ingressos.exists({ nome: req.body.nome });

    try {
      if (ingressoExists) {
        throw "Não é possível existir dois ingressos com o mesmo nome."
      } else {
        const evento = await Ingressos.create(req.body);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json(evento);
      }
    } catch (err) {
      res.status(406).send({ error: err });
      next(err);
    }
  })

router.route('/:id')
  .delete(async (req, res, next) => {
    const venda = await Vendas.exists({ ingressoId: req.params.id });

    try {
      if (venda) {
        throw "Não é possível excluir ingresso com vendas."
      } else {
        const ingresso = await Ingressos.deleteOne({ _id: req.params.id });
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json(ingresso);
      }
    } catch (err) {
      res.status(406).send({ error: err })
    }
  })
  .put(async (req, res, next) => {
    const venda = await Vendas.exists({ ingressoId: req.params.id });
    const ingressoEditado = await Ingressos.find({ _id: req.params.id });

    try {
      if ((ingressoEditado[0].eventoId != req.body.eventoId) && (ingressoEditado[0].nome != req.body.nome) && venda) {
        throw "Não é possível trocar o nome e o evento do ingresso com vendas."
      }
      else if ((ingressoEditado[0].eventoId != req.body.eventoId) && venda) {
        throw "Não é possível trocar o evento do ingresso com vendas."
      } else if ((ingressoEditado[0].nome != req.body.nome) && venda) {
        throw "Não é possível trocar o nome do ingresso com vendas."
      } else {
        await Ingressos.updateOne({ _id: req.params.id }, req.body);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json(req.body);
      }
    } catch (err) {
      res.status(406).send({ error: err })
      next(err);
    }
  })

module.exports = router;
