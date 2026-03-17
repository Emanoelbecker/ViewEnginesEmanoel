var express = require('express');
var router = express.Router();

/* GET culinaria page. */
router.get('/', function(req, res, next) {
  res.render('culinaria', { title: 'Culinária do Baiacu' });
});

module.exports = router;
