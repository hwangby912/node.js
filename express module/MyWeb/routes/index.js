var express = require('express');
var router = express.Router();

/* GET home page. */
// 주소로 부르는 것은 무조건 get 방식
router.get('/', function (req, res, next) {
  // biz
  // res.render('index', { title: 'Express' });
  res.render('index.html');
});

module.exports = router;
