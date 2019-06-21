const http = require("http");
const fs = require("fs");

const session = {};

http.createServer((req, res) => {
    if(req.url === "/") {
        fs.readFile("./index.html", (err, data) => {
            if(err) {
                throw err;
            }
            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });
            res.end(data);
        });
    } else if(req.url.startsWith("/login")) {
        // 1. id와 pw를 parsing 해야함
        const myURL = new URL("http://localhost:9999" + req.url);
        const id = myURL.searchParams.get("id");
        const pw = myURL.searchParams.get("pw");
        // 2. id != null && pw != null => 로그인(아직 DB가 없기에) => sessionId 만들어야함
        if(id && pw) {
            
        }
        // 3. cookie로 res 세팅
        // 4. 1, 2, 3중 하나라도 안되면 로그인 Fail 시키고 index.html로 넘길것임
    } else {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        res.end("처리 불가");
    }

}).listen(9999, () => {
    console.log("Server 9999 Start");
});