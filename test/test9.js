function add1(x, y) { // 함수 그 자체
	//console.log(this === global);
	return x + y;
}

var add2 = function(x, y) { // 함수를 add2에 넣어진 것
	//console.log(this === global);
	return x + y;
}

const add3 = function(x, y) { // 함수 add2와 같지만 const인것만 다름
	//console.log(this === global);
	return x + y;
}

const add4 = (x, y) => { // 인자 add4 = function(x, y)  { return x + y; }와 같음
	console.log(this);
	return x + y;
}

const add5 = (x, y) => (x + y); // add4와 같은 구문이지만, 중괄호를 없앤다면, return을 생략할 수 있다. 
// 1, 2, 3은 this가 같지만 4는 다름

const add6 = x => ++x; // 변수가 하나만 있기 때문에 ()를 생략해도 무관

const add7 = x => {
	++x;
	return ++x;
}
console.log(add7(10));