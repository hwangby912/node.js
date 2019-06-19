// 화살표 함수는 function을 쓰지 않으며 인자만 넣은 후 '=>'를 넣고 함수 body를 쓴다. 
// 그 후 화살표 함수를 함수 선언식으로 써서 변수로 넣고 exports 한다. 
module.exports = () => global.message;

/* 밑의 code와 동일한 형태
module.exports = function() {
    return global.message;
}
*/