const {URL} = require("url");
const myURL = new URL("http://70.12.50.51:3000/hello?name=HBY");
console.log(myURL.searchParams.get("name"));
