var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    loginState : req.session.loginState,
    loginEmail : req.session.email,
    loginName : req.session.name,
    loginPhone : req.session.phone
  });
});

module.exports = router;
