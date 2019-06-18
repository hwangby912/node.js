const { odd, even } = require("./js/var.js"); 
// core module은 경로를 지정해 주어야함
// require는 내장 함수, const {}는 비구조화 할당으로 이름으로 찾음

function checkOddOrEven(num) {
    if(num % 2) {
        return odd;
    } 
    return even;
}

//console.log(checkOddOrEven(19));

module.exports = checkOddOrEven; // checkOddOrEven이라는 함수를 다른곳에서도 사용할 수 있도록 만들어줌
