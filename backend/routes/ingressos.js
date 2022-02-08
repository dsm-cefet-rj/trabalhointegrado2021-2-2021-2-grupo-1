const express = require('express');
const router = express.Router();

const Ingressos = require('../models/ingressos');
const Vendas = require('../models/vendas');
const authenticate = require("../authenticate");
const bodyParser = require("body-parser");


router.use(bodyParser.json());

router.route('/')
  .get(authenticate.verifyUser, async (req, res, next) => {
    try {
      const ingressos = await Ingressos.find({});
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(ingressos);

    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })
  .post(authenticate.verifyUser, async (req, res, next) => {
    const ingressoExists = await Ingressos.exists({ nome: req.body.nome });
    const userIsEmpresa = req.user.tipo === "empresa";

    try {
      if (userIsEmpresa) {
        if (ingressoExists) {
          throw "Não é possível existir dois ingressos com o mesmo nome."
        } else {
          const ingresso = await Ingressos.create(req.body);
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(ingresso)
        }
      } else {
          throw "Somente empresas podem criar ingressos."
      }
    } catch (err) {
      res.status(400).send({ error: err });
      next(err);
    }
  })

router.route('/:id')
  .delete(authenticate.verifyUser, async (req, res, next) => {
    const venda = await Vendas.exists({ ingressoId: req.params.id });
    const userIsEmpresa = req.user.tipo === "empresa";

    try {
      if (userIsEmpresa) {
        if (venda) {
          throw "Não é possível excluir ingresso com vendas associadas."
        } else {
          const ingresso = await Ingressos.deleteOne({ _id: req.params.id });
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(ingresso)
        }  
      } else {
        throw "Somente empresas podem deletar ingressos."
      }
    } catch (err) {
      res.status(400).send({ error: err })
      next(err);
    }
  })
   .put(authenticate.verifyUser, async (req, res, next) => {
    const venda = await Vendas.exists({ ingressoId: req.params.id });
    const ingressoEditado = await Ingressos.find({ _id: req.params.id });
    const userIsEmpresa = req.user.tipo === "empresa"; 

    try {
      if (userIsEmpresa) {
        if ((ingressoEditado[0].eventoId != req.body.eventoId) && (ingressoEditado[0].nome != req.body.nome) && venda) {
          throw "Não é possível trocar o nome e o evento do ingresso com vendas associadas."
        }
        else if ((ingressoEditado[0].eventoId != req.body.eventoId) && venda) {
          throw "Não é possível trocar o evento do ingresso com vendas associadas."
        } else if ((ingressoEditado[0].nome != req.body.nome) && venda) {
          throw "Não é possível trocar o nome do ingresso com vendas associadas."
        } else {
          await Ingressos.updateOne({ _id: req.params.id }, req.body);
          res.setHeader('Content-Type', 'application/json');
          res.status(200).json(req.body)
        }
        } else {
        throw "Somente empresas podem editar eventos."
      }
    } catch (err) {
      res.status(400).send({ error: err })
      next(err);
    }
  })

module.exports = router;
