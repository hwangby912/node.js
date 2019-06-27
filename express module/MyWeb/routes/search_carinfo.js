var express = require('express');
var router = express.Router();

router.post('/', (req, res, next) => {
    const select_menu = req.body.select_menu;
    const carNum = req.body.carNum;
    const car_info = {
        "제조사": "현대",
        "자동차명": "에쿠스",
        "배기량": "2,972cc",
        "사용연료": "가솔린",
        "차체형상": "세단",
        "용도 및 차종": "자가용 승용",
        "최초 보험 가입 일자": "2004-01-03"
    };
    const result = {
        msg : ''
    };

    if(select_menu && carNum) {
        // Hard coding
        // result.msg = "<table border = 1 width = '1000px'>\
        // <tr><th>제조사</th><th>자동차명</th><th>배기량</th><th>사용연료</th>\
        // <th>연식</th><th>차체형상</th><th>용도 및 차종</th><th>최초 보험 가입일자</th></tr>\
        // <tr><td>아우디</td><td>A5</td><td>2,972cc</td><td>가솔린</td>\
        // <td>2019</td><td>4도어 세단</td><td>자가용</td><td>2019.01.01</td></tr>\
        // </table>";

        // car_info 변수를 접근하여 for in문으로 출력해보자
        result.msg = car_info;
        // console.log(JSON.stringify(result));
        res.json(JSON.stringify(result));
    } else {
        result.msg = '결과 없음';
        res.json(JSON.stringify(result));
    }
});

module.exports = router;
