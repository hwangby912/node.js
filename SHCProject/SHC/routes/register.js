var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
    req.session.name = req.body.name;
    req.session.email = req.body.email;
    req.session.phone = req.body.phone;
    req.session.message = req.body.message;

    const result = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        message : req.body.message,
        txt : `${req.body.name}님이 가입되었습니다. `
    };
    res.json(JSON.stringify(result));
});

module.exports = router;