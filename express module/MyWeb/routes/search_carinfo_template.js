var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('search_carinfo_template.html');
});

module.exports = router;
