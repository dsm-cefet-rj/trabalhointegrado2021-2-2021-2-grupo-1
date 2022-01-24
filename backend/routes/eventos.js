var express = require('express');
var router = express.Router();

let eventos = [{
  "id": 1,
  "nome": "Evento 1",
  "genero": "musica",
  "endereco": "Rua 1",
  "local": "São Paulo",
}, {
  "id": 2,
  "nome": "Evento 2",
  "genero": "musica",
  "endereco": "Rua 2",
  "local": "São Paulo",
}]

/* GET users listing. */
router.route('/')
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(eventos);
  })
  .post((req, res, next) => {
    const id = Math.max(...eventos.map(evento => evento.id)) + 1;

    eventos.push({ ...req.body, id });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      ...req.body,
      id
    });
  })

router.route('/:id')
  .delete((req, res, next) => {
    eventos.filter((evento) => evento.id != req.params.id);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.params.id);
  })
  .put((req, res, next) => {
    const evento = eventos.find(evento => evento.id == req.params.id);
    eventos.splice(eventos.indexOf(evento), 1, { ...evento, ...req.body });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.body);
  })

module.exports = router;
