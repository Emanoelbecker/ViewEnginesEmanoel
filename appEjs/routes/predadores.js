var express = require('express');
var router = express.Router();

/* GET predadores page. */
router.get('/', function(req, res, next) {
  res.render('predadores', { title: 'Predadores' });
});

/* GET pesticidas page. */
router.get('/pesticidas', function(req, res, next) {
  res.render('pesticidas', { title: 'Pesticidas' });
});

module.exports = router;
