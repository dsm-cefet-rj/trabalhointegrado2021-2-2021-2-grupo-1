var express = require('express');
var router = express.Router();

let ingressos = [{
    "id": 1,
    "eventoId": "1",
    "nome": "Ingresso 1",
    "horario": "15:00",
    "data": "24/12/24",
    "dadosAdicionais": "Dados Adicionais",
  
}, {
    "id": 2,
    "eventoId": "2",
    "nome": "Ingresso 2",
    "horario": "15:00",
    "data": "25/12/24",
    "dadosAdicionais": "Dados Adicionais",
}]

/* GET users listing. */
router.route('/')
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(ingressos);
  })
  .post((req, res, next) => {
    const id = Math.max(...ingressos.map(ingresso => ingresso.id)) + 1;

    ingressos.push({ ...req.body, id });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      ...req.body,
      id
    });
  })

router.route('/:id')
  .delete((req, res, next) => {
    ingressos.filter((ingresso) => ingresso.id != req.params.id);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.params.id);
  })
  .put((req, res, next) => {
    const ingresso = ingressos.find(ingresso => ingresso.id == req.params.id);
    ingressos.splice(ingressos.indexOf(ingresso), 1, { ...ingresso, ...req.body });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.body);
  })

module.exports = router;
