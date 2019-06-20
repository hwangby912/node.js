const url = require("url");
const queryString = require("querystring");
const myURLParse = url.parse("http://70.12.50.51:3000/hello?name=HBY");
const query = queryString.parse(myURLParse.query);

// console.log(myURL);
// console.log(myURLFormat);
// console.log(myURLParse.query.split("=")[1]);
console.log(query.name);