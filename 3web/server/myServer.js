const http = require("http");
const fs = require("fs");

/* server 변수를 한번만 쓰니 아래의 방식과 같이 쓸 수 있다. 
const server = http.createServer((req, res) => {
    res.writeHead(200, { 
        "Content-Type": "text/html; charset=utf-8"
    });
    res.write("<h1>안녕하세요 HBY</h1>");
    res.end();
}); // createServer 인자에 callback 함수 지정
server.listen(9999, () => {
    console.log("Server ready...........");
}); // 0 ~ 65535번 port까지 사용 가능함. 0 ~ 1024 port까지는 사용하지 말자!
*/

// server가 시작되면 index.html file을 읽고 싶은 경우
http.createServer((req, res) => {
    fs.readFile("./index.html", (err, data) => {
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
