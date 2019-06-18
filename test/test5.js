// test4.js와 같은 의미인 파일이지만, 최신 문법임

const sayNode = function() {
    console.log('Node');
};

const es = "ES";
const newObject = {
    sayJS() {
        console.log("JS");
    }, 
    sayNode, // python의 dictionary의 key와 value에서 value만 있는 형태
    [es + 6]: "Fantastic" // 값의 동적 naming을 한 것
}; // 객체 type

newObject.sayJS();
newObject.sayNode(); // 왜냐하면 newObject안의 sayNode는 value이지만 바깥에서 sayNode는 함수이기 때문에 ()를 붙인다. 
