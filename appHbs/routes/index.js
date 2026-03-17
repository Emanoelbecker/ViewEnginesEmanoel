var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Morangos' });
});

/* GET receitas page. */
router.get('/receitas', function(req, res, next) {
  res.render('receitas', { title: 'Receitas com Morangos' });
});

/* GET fazendas page. */
router.get('/fazendas', function(req, res, next) {
  res.render('fazendas', { title: 'Maiores Fazendas de Morangos' });
});

module.exports = router;
