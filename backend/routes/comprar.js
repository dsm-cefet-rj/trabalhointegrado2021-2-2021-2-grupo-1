var express = require('express');
var router = express.Router();

let comprar = [{
  "id": 1,
  "cpf":111111111,
}, {
  "id": 2,
  "cpf":222222222,
}]

/* GET users listing. */
router.route('/')
  .get((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(comprar);
  })
  .post((req, res, next) => {
    const id = Math.max(...comprar.map(compra => compra.id)) + 1;

    comprar.push({ ...req.body, id });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
      ...req.body,
      id
    });
  })

router.route('/:id')
  .delete((req, res, next) => {
    comprar.filter((compra) => compra.id != req.params.id);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.params.id);
  })
  .put((req, res, next) => {
    const compra = comprar.find(compra => compra.id == req.params.id);
    comprar.splice(comprar.indexOf(compra), 1, { ...compra, ...req.body });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.body);
  })

module.exports = router;