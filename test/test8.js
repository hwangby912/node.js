var relationship1 = {
	name: "zero",
	friends: ["zero", "hero", "xero"],
	logFriends: function() {
		var that = this;
		this.friends.forEach(function(friend) {
			console.log(that.name, friend);
		});
	}
};

relationship1.logFriends();
// 서로 같은 것을 수행한다. 
// forEach는 1번째 인자로 함수를 인자로 받는다. 해당 함수의 인자는 3개로 이루어진다. 
// 1번째 원소의 value, 2번째 원소의 index, 3번째는 배열 그 자체(일반적으로 1번째만 사용)
const relationship2 = {
	name: "zero", 
	friends: ["nero", "hero", "xero"],
	logFriends() {
		this.friends.forEach(friend => { // => 이전의 것은 인자
			console.log(this.name, friend);
		});
	}
};

relationship2.logFriends();