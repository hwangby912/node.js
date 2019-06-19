const url = require("url");

let myURL = new url.URL("http://70.12.50.51:3000/hello?name=HBY");

// console.log(myURL.searchParams.get("name"));
// console.log("===============================================");
// 결국 2개가 같은 code이다. 
const { URL } = require("url");
const myURL2 = new URL("http://70.12.50.51:3000/hello?name=HBY");
console.log(myURL.searchParams.get("name"));
// console.log(myURL2);

// console.log(url);