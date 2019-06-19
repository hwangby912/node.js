# Node.js Basic

1. Object Literal 

   예전 문법

   ```javascript
   var sayNode = function() {
       console.log('Node');
   };
   
   var es = "ES";
   var oldObject = {
       sayJS: function() {
           console.log("JS");
       }, 
       sayNode_: sayNode
   }; // 객체 type
   
   oldObject[es + 6] = "Fantastic"; 
   // oldObject.ES6 = "Fantastic"과 동일 좋은 code는 아님(가독성 별로임)
   
   oldObject.sayNode_(); 
   // sayNode라는 함수를 호출하는 것이기에 () 붙이기
   oldObject.sayJS();
   console.log(oldObject.ES6);
   ```

   ```javascript
   var sayNode = "JS";
   var oldObject = {
       sayJS: function() {
           console.log("JS");
       }, 
       sayNode_: sayNode
   }; // 객체 type
   
   console.log(oldObject.sayNode_);
   // oldObject.sayNode_는 첫째줄의 sayNode = "JS";와 같음
   ```

   JS에서의 window 객체가 node.js에서는 global 객체이다. 

   ```javascript
   JS
   console.log(this === window) // true
   
   node.js
   console.log(this === global) // false
   ```

   이렇게만 하면 알기 힘드니 다른 예시로 자세하게 알아보자. 

   JS

   ```javascript
   var a = 10;
   b = 20; // window member
   function c() {
   	var d = 30;
   }
   
   console.log(this === window);     
   console.log(window.a);
   console.log(window.b);
   console.log(c);
   console.log(a);
   console.log(window.a === a);
   console.log(window.b === b);
   ```

   ![JS에서의 window rs ](C:\Users\HBY\Desktop\Java\4Nodejs\picture\JS에서의 window rs .PNG)

   여기서 window 객체는 Web Browser 창(window)을 나타내는 객체이며, 모든 객체의 조상이다. 그래서 전역객체(Global Object)라고도 한다. window 객체의 method는 전역 함수이며, window 객체의 property는 전역 변수가 된다. 

   우리가 만드는 변수들도 모두 window 객체 안에 등록된다. 

   var를 붙이건 안붙이건 JS에서는 window 안에 member 변수로 저장된다. 

   node.js

   ```javascript
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
   ```
   
   ![node.js에서의 global rs](C:\Users\HBY\Desktop\Java\4Nodejs\picture\node.js에서의 global rs.PNG)
   
   해당 code에 대한 memory 상황
   
   ![node.js memory rs](C:\Users\HBY\Desktop\Java\4Nodejs\picture\node.js memory rs.PNG)
   
   다른 code에 대해서 memory적으로의 그림은 다음과 같다고 생각한다(100% 확신 X)
   
   globalExample1
   
   ```javascript
   var a=10; //이 문서 f()의 local stack
   b=20; //global member
   this.c=30; //문서{} member
   function d(){
   var e=40;//d의 local stack
   f=50; //global member
   this.g=60; //global member
   }
   d();
   console.log(global.g);//60
   ```
   
   ![globalExample1](C:\Users\HBY\Desktop\Java\4Nodejs\picture\globalExample1.PNG)
   
   globalExample2
   
   ```javascript
   var a=10; //이 문서 f()의 local stack
   b=20; //global member
   this.c=30; //문서{} member
   var d=function (){
   var e=40;//d의 local stack
   f=50; //global member
   this.g=60; //global member
   }
   d();
   console.log(global.g);//60
   ```
   
   ![globalExample2](C:\Users\HBY\Desktop\Java\4Nodejs\picture\globalExample2.PNG)
   
   globalExample3
   
   ```javascript
   var a=10; //이 문서 f()의 local stack
   b=20; //global member
   this.c=30; //문서{} member
   var d={
     d2:function (){
     var e=40;//d2의 local stack
     f=50; //global member
     this.g=60; //d member
     }
   }
   d.d2();
   console.log(d.g);//60
   
   ```
   
   ![globalExample3](C:\Users\HBY\Desktop\Java\4Nodejs\picture\globalExample3.PNG)
   
2. array.forEach(function(value, index, array))

   ```javascript
   var obj = {
   	txt: "aaa",
   	numbers: [45, 4, 9, 16, 25],
   	myFunction: function() {
           // myFunction의 호출도 global이 하기에 밑의 console.log(txt)도 global.txt이다. 
   		this.numbers.forEach(function(value, index) {
   			// 즉 forEach의 호출 객체가 global이라는 것을 알 수 있는 대목이다. 
               // console.log(this === global); // true
   			this.txt = this.txt + ": " + index + ": " + value + "\n";
               //this.txt === global.txt != obj.txt
   		})
   		console.log(txt);
   	}
   };
   
   obj.myFunction();
   console.log(obj.txt);
   console.log(this.txt);
   ```

   ![forEach rs](C:\Users\HBY\Desktop\Java\4Nodejs\picture\forEach rs.PNG)

   처음 console.log(txt)의 값이 없기 때문에 undefined로 나오며, 그 이후에는 index와 value를 더하기에 계속 찍힘. 

   obj.txt가 aaa일 뿐이지, this.txt는 값이 존재하지 않는다. 

   forEach() 함수 참고 자료: https://www.w3schools.com/js/js_array_methods.asp

   ```javascript
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
   // forEach는 1번째 인자로 함수를 인자로 받는다(callback function) 해당 함수의 인자는 3개로 이루어진다. 
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
   ```

3. 비구조화 할당

   node.js에서 매우 유용하게 쓰이는 기능이며, 객체와 배열로부터 속성이나 요소를 쉽게 꺼낼 수 있다. 

   ```javascript
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
   
   ```

   candyMachine안의 객체에서 속성을 찾아 변수와 매칭해주며, 순서에 상관없이 변수의 이름만을 보고 매칭해주기 때문에, 이름이 틀리면 안됨.

   ```javascript
   var array = ['nodejs',{},10,true];
   var node = array[0]; // array[0] == node
   var obj = array[1]; // array[1] == obj
   var bool = arrray[3]; // array[3] == bool
   ```

   위의 내용을 아래와 같이 바꿀 수 있다. 

   ```javascript
   const array = ['nodejs',{},10,true];
   const [node,obj,,bool]=array;
   ```

4. AJAX

   GET 방식

   ```javascript
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function(){
     if(xhr.readyState === xhr.DONE){
       if(xhr.status === 200 || xhr.status === 201){
         console.log("OK :" ,xhr.responseText);
       }else{
         console.log("FAIL :" ,xhr.responseText);
       }
     }
   };
   xhr.open('GET','https://www.zerocho.com/api/get');
   xhr.send();
   ```

   위의 code에서 onreadystatechange의 성공을 onload, 실패를 onerror로 나눠서 쓰는 방식도 가능하다. 위의 code와 동일하게 onload와 onerror를 쓴 방식은 다음과 같다. 

   ```javascript
   var xhr = new XMLHttpRequest();
   xhr.onload = function() {
   	if(xhr.status === 200 || xhr.status === 201){
         console.log("OK :" ,xhr.responseText);
       }
   };
   
   xhr.onerror = function() {
       console.error("FAIL :" ,xhr.responseText);
   };
   xhr.open('GET','https://www.zerocho.com/api/get');
   xhr.send();
   ```

   위의 방식을 POST방식과 jQuery로 바꾸면 다음과 같다. (HTML file)

   ```javascript
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
   var sendData={
     name: 'zerocho',
     birth: 1994
   };
   $(document).ready(function(){
     $.post('https://www.zerocho.com/api/post/json',
            sendData,
            function(data,status){
       console.log(data,status);
       alert(typeof data.message.birth);
     });
   });
   ```

5. JS module로 만들기

   node는 code를 module로 만들 수 있다는 점에서 Browser의 JS와 다르다. module이란 특정한 기능을 하는 함수나 변수들의 집합이다. 

   node의 module은 내장 객체로써 global object중 하나이다. 

   var.js

   ```javascript
   const odd = "It is odd";
   const even = "It is even";
   
   module.exports={
     odd,
     even
   }; // 이 변수들을 다른곳에서 호출 가능하도록 함
   ```

   func.js

   ```javascript
   const { odd, even } = require("./js/var.js"); 
   // core module은 경로를 지정해 주어야함
   // require는 내장 함수, const {}는 비구조화 할당으로 이름으로 찾음
   
   function checkOddOrEven(num){
     if(num % 2){ 
       return odd;
     }
     return even;
   }
   
   module.exports = checkOddOrEven;
   // checkOddOrEven이라는 함수를 다른곳에서도 사용할 수 있도록 만들어줌
   ```

   index.js

   ```javascript
   const { odd, even } = require("./js/var.js"); 
   const checkNumber = require('./func');
   // require에 대해서 경로 설정만 잘해주면 문제 없이 쓸 수 있음.
   function checkStringOddOrEven(str){
     if(str.length % 2){
       return odd;
     }
     return even;
   }
   
   console.log(checkNumber(10));
   console.log(checkStringOddOrEven('hello'));
   console.log(checkStringOddOrEven('hello!'));
   ```

6. Web Application Server

   실제로 돌아가는 서버를 만드는 code에 해당함. 

   여기에서는 Global Object에 있던 다양한 module들을 사용함. 

   Server Programming의 기본 Format

   ```javascript
   const http = require("http"); // module을 사용하기 위해 require 사용
   const fs = require("fs");
   
   /* server 변수를 한번만 쓰니 아래의 방식과 같이 쓸 수 있다. 
   const server = http.createServer((req, res) => {
       res.writeHead(200, { 
           "Content-Type": "text/html; charset=utf-8"
       }); // charset = utf-8에서 띄어쓰기 하면 인식 X
       res.write("<h1>안녕하세요 HBY</h1>");
       res.end();
   }); // createServer 인자에 callback 함수 지정
   server.listen(9999, () => {
       console.log("Server ready...........");
   }); // 0 ~ 65535번 port까지 사용 가능함. 0 ~ 1024 port까지는 사용하지 말자!
   */
   
   // createServer().listen()이라는 함수가 존재함.
   // server가 시작되면 index.html file을 읽고 싶은 경우
   
   // createServer를 완료하면 (req, res)를 인자로 callback 함수 수행
   http.createServer((req, res) => {
       fs.readFile("./index.html", (err, data) => { 
           // index.html을 읽고나면 callback 함수 수행
           if(err) {
               throw err;
           } 
           res.writeHead(200, { 
               "Content-Type": "text/html; charset=utf-8"
           });
           res.end(data);
       });
   }).listen(9999, () => { 
       console.log("Server ready...........");
   });
   
   // server.listen port 9999로 지정하며, 해당 함수가 수행되면 console.log를 찍는다. 
   // writeHead의 2번째 인자값을 JSON type으로 주는 것을 볼 수 있다. 
   ```

   