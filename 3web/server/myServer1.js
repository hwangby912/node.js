const http = require("http");
const fs = require("fs");
const path = require("path");
const {memUsagePer, freeSpacePer} = require("../../2global_test/os");

// HTTP 진행순서 그림 보면서 되새기자

const server = http.createServer((req, res) => {
    console.log(req.url);

    if(req.url === "/") {
        fs.readFile("./band.html", (err, data) => {
            if(err) {
                throw err;
            }
            res.end(data);
        });
    } else if(req.url === "/simpleMe") {
        fs.readFile("./simpleMe.html", (err, data) => {
            if(err) {
                throw err;
            }
            res.end(data);
        });
    } else if(req.url === "/memChart") {
        console.log(memUsagePer, freeSpacePer);
        fs.readFile("./memChart.html", (err, data) => {
            if(err) {
                throw err;
            }
            res.end(data);
        });
    } else if(req.url === "/video") {
        fs.readFile("./video.mp4", (err, data) => {
            if(err) {
                throw err;
            }
            // data의 type에 따라서 writeHead의 2번째 인자값이 달라짐. 
            res.writeHead(200, 
                {"Content-Type": "video/mp4"});
            res.end(data);
        });
    } else if(req.url === "/video.html") {
        fs.readFile("./video.mp4", (err, data) => {
            if(err) {
                throw err;
            }
            res.writeHead(200, 
                {"Content-Type": "video/mp4"});
            res.end(data);
        });
    }
});

// request가 왔을 때 아무것도 안함
server.listen(7777, () => {
    console.log("server ready");
});

// favicon.ico라는 것이 나오는데 검색해서 알아보자.