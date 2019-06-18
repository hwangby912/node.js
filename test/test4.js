var sayNode = "JS";
/*
var sayNode = function() {
    console.log('Node');
};
*/
var es = "ES";
var oldObject = {
    sayJS: function() {
        console.log("JS");
    }, 
    sayNode_: sayNode
}; // 객체 type

oldObject[es + 6] = "Fantastic"; 
// oldObject.ES6 = "Fantastic"과 동일 좋은 code는 아님(가독성 별로임)

console.log(oldObject.sayNode_);
//oldObject.sayJS();
//console.log(oldObject.ES6);