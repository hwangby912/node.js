var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('catalogue.html');
});

module.exports = router;