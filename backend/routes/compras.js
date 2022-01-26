var express = require('express');
var router = express.Router();

let compras = [{
  "id": 1,
  "vendaId": "1",
  "cpf": 11111111111,
}, {
  "id": 2,
  "vendaId": "2",
  "cpf": 11111111111,
}]


router.route('/')
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(compras);
  })
  .post((req, res, next) => {
    const id = Math.max(...compras.map(compra => compra.id)) + 1;

    compras.push({ ...req.body, id });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      ...req.body,
      id
    });
  })

router.route('/:id')
  .delete((req, res, next) => {
    compras.filter((compra) => compra.id != req.params.id);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.params.id);
  })
  .put((req, res, next) => {
    const compra = compras.find(compra => compra.id == req.params.id);
    compras.splice(compras.indexOf(compra), 1, { ...compra, ...req.body });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.body);
  })

module.exports = router;