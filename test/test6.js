// node에서는 window객체 대신 global 객체를 사용한다. 

var a = 10; // stack에 들어가게 됨
b = 20; // 즉, 변수앞에 무엇을 안붙이면 global 변수
this.c = 40;

// this.f = function() {
// 	console.log(this.c);
// }
// this.f()
function f() {
	var d = 30; // local 변수이며 접근을 하려면 return을 써서 접근해야한다. 
	console.log(this.c); // this.c라는 것은 f가 정의됨에 따라 호출되므로 f() 안에 c를 찾기에 undefined가 됨.
}

console.log(this);
console.log(this.c);
console.log(this===global);
console.log(a); // 이렇게 해야 a가 호출됨.
console.log(global.a); // 이렇게 하면 a가 나오지 않음
console.log(global.b);
console.log(b);
f();
console.log(global.d);