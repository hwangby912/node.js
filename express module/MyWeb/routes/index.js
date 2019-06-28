var express = require('express');
var router = express.Router();

/* GET home page. */
// 주소로 부르는 것은 무조건 get 방식
router.get('/', function (req, res, next) {
  // biz
  // res.render('index', { title: 'Express' });
  res.render('index', {
    loginEmail : req.session.email,
    loginState : req.session.loginState // 응답
  });
});

module.exports = router;
