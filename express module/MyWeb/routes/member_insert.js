var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    // 일을 할 code를 넣기
    const result = {
        msg : "Hello. "
    }
    // json 객체로 보낸다. 그래서 object 객체를 json 객체로 변환함
    res.json(JSON.stringify(result));
});

module.exports = router;
