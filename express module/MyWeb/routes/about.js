var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/', function (req, res, next) {
  res.render('about', { title: 'HBY' });
});

module.exports = router;