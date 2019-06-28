var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const result = {
        msg : ''
    };

    console.log('Session ID =' + req.sessionID);
    if((req.session.email === req.body.email) && (req.session.phone === req.body.phone)) {
        req.session.loginState = true;
        res.redirect('/');
    } else {
        msg = '다시 로그인 해주세요. ';
        location.reload(true);
    }
});

module.exports = router;
