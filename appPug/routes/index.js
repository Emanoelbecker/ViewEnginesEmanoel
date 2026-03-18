var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Baiacus' });
});

/* POST culinaria com dados da pesca */
router.post('/culinaria', function(req, res, next) {
  const formularioPesca = {
    maiorBaiacu: req.body.maiorBaiacu,
    comeuBaiacu: req.body.comeuBaiacu,
    passouMal: req.body.passouMal,
    nome: req.body.nome,
    localPesca: req.body.localPesca
  };
  
  res.render('culinaria', { 
    title: 'Culinária',
    formularioPesca: formularioPesca
  });
});

module.exports = router;
