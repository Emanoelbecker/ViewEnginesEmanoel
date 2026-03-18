var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Grama Santo Agostinho' });
});

/* POST produtos com dados da propriedade */
router.post('/produtos', function(req, res, next) {
  const formulario = {
    nome: req.body.nome,
    tamanhoTerreno: req.body.tamanhoTerreno,
    problemaPestes: req.body.problemaPestes,
    alturaMedia: req.body.alturaMedia,
    endereco: req.body.endereco
  };
  
  res.render('produtos', { 
    title: 'Produtos',
    formulario: formulario
  });
});

module.exports = router;
