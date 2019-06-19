const a = require("./module1"); 
// file명을 module로 인식함, module1.js에서 값만 exports 한 것을 const a로 집어 넣음.
/*
const {a} = require("./module1.js");
// 해당 code는 이름으로 mapping 한다. 
// module.exports = {a}로 지정을 해줘야 결과값이 동일하게 나옴
*/

// module1.js에
// a = 10; 후에 밑에 줄 수행하면 10 출력
console.log(a);