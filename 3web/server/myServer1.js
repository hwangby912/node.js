const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    console.log(req.url);

    fs.readFile("./band.html", (err, data) => {
        if(err) {
            throw err;
        }
        res.end(data);
    });

    if(req.url === "/simpleMe") {
        fs.readFile("./simpleMe.html", (err, data) => {
            if(err) {
                throw err;
            }
            res.end(data);
        });
    }
});

// request가 왔을 때 아무것도 안함
server.listen(7777, () => {
    console.log("server ready");
});

// favicon.ico라는 것이 나오는데 검색해서 알아보자.