var express = require('express');
var router = express.Router();

/* GET parentes page. */
router.get('/', function(req, res, next) {
  res.render('parentes', { title: 'Parentes dos Baiacus' });
});

module.exports = router;
