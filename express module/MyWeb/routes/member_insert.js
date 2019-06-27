var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function (req, res, next) {
    // 일을 할 code를 넣기
// msg 쪽 ${req.body.name}으로 하는 부분이 사용자의 parameter를 가져오는 것
    console.log('Session ID = ' + req.sessionID);
    req.session.name = req.body.name;
    req.session.email = req.body.email;
    req.session.comments = req.body.comments;
    const result = {
        name : req.body.name,
        email : req.body.email,
        comments : req.body.comments,
        msg : `${req.body.name}님이 가입되셨습니다. `
    };
    res.json(JSON.stringify(result));
});

module.exports = router;
