var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const result = {
        txt : ''
    };

    console.log('Session ID =' + req.sessionID);
    console.log(req.session.email);
    console.log(req.body.email);
    console.log(req.session.phone);
    console.log(req.body.phone);
    
    if((req.session.email === req.body.email) && (req.session.phone === req.body.phone)) {
        req.session.loginState = true;
        res.redirect('/');
    } else {
        txt = '다시 로그인 해주세요. ';
        res.json(JSON.stringify(result));
    }
});

module.exports = router;
