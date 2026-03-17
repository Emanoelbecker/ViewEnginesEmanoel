var express = require('express');
var router = express.Router();

/* GET fazendas page. */
router.get('/', function(req, res, next) {
  res.render('fazendas', { title: 'Maiores Fazendas de Morangos' });
});

module.exports = router;
