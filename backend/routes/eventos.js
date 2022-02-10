const express = require("express");
const router = express.Router();

const Eventos = require("../models/eventos");
const Ingressos = require("../models/ingressos");

const authenticate = require("../authenticate");

router.route("/")
  .get(async (req, res, next) => {
    try {
      const eventos = await Eventos.find({});
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(eventos);
    } catch (err) {
      res.statusCode = 404;
      next(err);
    }
  })
  .post(authenticate.checkUserType(), async (req, res, next) => {
    const eventoExists = await Eventos.exists({ nome: req.body.nome });

    try {
      if (eventoExists) {
        throw "Não é possível existir dois eventos com o mesmo nome."
      } else {
        const evento = await Eventos.create(req.body);
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(evento);
      }
    } catch (err) {
      res.status(406).send({ error: err });
      next(err);
    }
  })

router.route("/:id")
  .delete(authenticate.checkUserType(), async (req, res, next) => {
    const ingressoExists = await Ingressos.exists({ eventoId: req.params.id });

    try {
      if (ingressoExists) {
        throw "Não é possível excluir evento com ingressos associados."
      } else {
        const evento = await Eventos.deleteOne({ _id: req.params.id });
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(evento);
      }
    } catch (err) {
      res.status(406).send({ error: err });
      next(err);
    }
  })
  .put(authenticate.checkUserType(), async (req, res, next) => {
    const ingressoExists = await Ingressos.exists({ eventoId: req.params.id });
    const eventoEditado = await Eventos.find({ _id: req.params.id });

    try {
      if ((eventoEditado[0].nome != req.body.nome) && ingressoExists) {
        throw "Não é possível editar nome do evento com ingressos associados."
      } else {
        await Eventos.updateOne({ _id: req.params.id }, req.body);
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(req.body);
      }
    } catch (err) {
      res.status(406).send({ error: err })
      next(err);
    }
  })

module.exports = router;
