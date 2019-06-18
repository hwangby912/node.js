const { odd, even } = require("./js/var.js"); 
const checkNumber = require('./func');

function checkStringOddOrEven(str){
  if(str.length % 2){
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
console.log(checkStringOddOrEven('hello!'));