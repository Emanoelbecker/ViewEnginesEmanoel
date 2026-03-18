var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Morangos' });
});

/* POST receitas com dados do morango */
router.post('/receitas', function(req, res, next) {
  const formularioMorango = {
    maiorMorango: req.body.maiorMorango,
    nome: req.body.nome,
    colheita: req.body.colheita,
    receitaFavorita: req.body.receitaFavorita,
    comeuMorangoAmor: req.body.comeuMorangoAmor
  };
  
  res.render('receitas', { 
    title: 'Receitas com Morangos',
    formularioMorango: formularioMorango
  });
});

module.exports = router;
