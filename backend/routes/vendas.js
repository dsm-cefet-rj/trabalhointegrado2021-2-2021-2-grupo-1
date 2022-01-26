var express = require('express');
var router = express.Router();

let vendas = [{
  "id": 1,
  "ingressoId": "1",
  "nome": "Venda 1",
  "valor": "20",
  "quantidade": "1000",
}, {
  "id": 2,
  "ingressoId": "2",
  "nome": "Venda 2",
  "valor": "300",
  "quantidade": "100",
}]

router.route('/')
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(vendas);
  })
  .post((req, res, next) => {
    const id = Math.max(...vendas.map(venda => venda.id)) + 1;

    vendas.push({ ...req.body, id });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      ...req.body,
      id
    });
  })

router.route('/:id')
  .delete((req, res, next) => {
    vendas.filter((venda) => venda.id != req.params.id);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.params.id);
  })
  .put((req, res, next) => {
    const venda = vendas.find(venda => venda.id == req.params.id);
    vendas.splice(vendas.indexOf(venda), 1, { ...venda, ...req.body });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.body);
  })

module.exports = router;
