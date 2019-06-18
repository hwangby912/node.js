/*
// 이것들을 obj에 넣는 경우 밑에 code에 해당한다. 
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index) {
  txt = txt + value + ": " + index + "\n"; 
}

console.log(txt);
*/
		
var obj = {
	txt: "aaa",
	numbers: [45, 4, 9, 16, 25],
	myFunction: function() {
		this.numbers.forEach(function(value, index) {
			// console.log(this === global); // true
			this.txt = this.txt + ": " + index + ": " + value + "\n";
		})
		console.log(txt);
	}
};

obj.myFunction();
console.log(obj.txt);
console.log(this.txt);
