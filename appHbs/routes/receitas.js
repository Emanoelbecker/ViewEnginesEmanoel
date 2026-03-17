var express = require('express');
var router = express.Router();

/* GET receitas page. */
router.get('/', function(req, res, next) {
  res.render('receitas', { title: 'Receitas com Morangos' });
});

/* GET morangodo amor page. */
router.get('/morangodo-amor', function(req, res, next) {
  res.render('morangodo-amor', { title: 'Morango do Amor' });
});

module.exports = router;
