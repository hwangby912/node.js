var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    // biz -> DB 연동 및 수행할 것들을 작성
    const result = {
        msg : ''
    };
    console.log('Session ID = ' + req.sessionID);
    console.log(req.session.name);
    console.log(req.session.email);
    console.log(req.session.comments);
    // member_insert.js file에서 req.session 값을 지정하였기에 가능
    // 해당 session 안에 담겨있는 email과 사용자가 입력한 email과 비교
    if(req.session.email === req.body.email) {
        result.msg = `${req.session.email}님이 로그인 되었습니다. `;
    } else {
        result.msg = '다시 로그인해주세요. ';
    }
    res.json(JSON.stringify(result));
});

module.exports = router;