const express = require('express');
const router = express.Router();

const Vendas = require('../models/vendas');
const Compras = require('../models/compras');

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
    const vendaExists = await Vendas.exists({ ingressoId: req.body.ingressoId, revenda: false });

    try {
      if (vendaExists) {
        throw "Não é possível existir duas vendas de um mesmo ingresso."
      } else {
        const venda = await Vendas.create(req.body);
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json(venda);
      }
    } catch (err) {
      res.status(406).send({ error: err });
      next(err);
    }
  })

router.route('/:id')
  .delete(async (req, res, next) => {
    const compra = await Compras.exists({ vendaId: req.params.id });

    try {
      if (compra) {
        throw "Não é possível excluir venda com compradores."
      } else {
        const venda = await Vendas.deleteOne({ _id: req.params.id });
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.json(venda);
      }
    } catch (err) {
      res.status(406).send({ error: err });
      next(err);
    }
  })
  .put(async (req, res, next) => {
    const compra = await Compras.exists({ vendaId: req.params.id });
    const vendaEditada = await Vendas.find({ _id: req.params.id });

    try {
      if ((vendaEditada[0].ingressoId != req.body.ingressoId) && compra) {
        throw "Não é possível trocar o nome da venda com compradores."
      } else {
        await Vendas.updateOne({ _id: req.params.id }, req.body);
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
