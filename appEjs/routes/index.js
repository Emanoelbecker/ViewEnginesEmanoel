var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Grama Santo Agostinho' });
});

/* GET predadores page. */
router.get('/predadores', function(req, res, next) {
  res.render('predadores', { title: 'Predadores' });
});

/* GET produtos page. */
router.get('/produtos', function(req, res, next) {
  res.render('produtos', { title: 'Produtos' });
});

module.exports = router;
