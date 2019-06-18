var candyMachine = {
	status: {
		name: "node",
		count: 5
	},
	getCandy: function() {
		this.status.count--;
		return this.status.count;
	}, 
	a: 10,
	b: 20,
	c: 30
};

//var getCandy = candyMachine.getCandy // 접근 하는 것은 getCandy라는 key값이므로 ()를 쓰지 않는다!!!!
//var count = candyMachine.status.count;
const {getCandy, status, a, b, c} = candyMachine; // candyMachine 안에 있는 것들을 찾아간다. 순서에 상관없이
console.log(candyMachine);
//console.log(getCandy);
