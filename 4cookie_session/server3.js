const http = require("http");
let count = 0;
const parseCookies = (cookies) => {
    if(cookies) {
        console.log(typeof cookies);
        const arr = cookies.split(";");
        const elemap = arr.map((ele) => ele.split("="));
        elemap.map(([k, ...vs]) => {
            console.log(k, vs);
            const kvs = [k, vs.join("=")];
            console.log("===========", kvs);
            return kvs;
        });
        // console.log(elemap);
    }
};
const server = http.createServer((req, res) => {
    const cookies = req.headers.cookie;
    parseCookies(cookies);
    res.writeHead(200, {
   "Set-Cookie" : `myCookie${++count}=test${count}`
    });
    res.end("It is over cookie setting");
});

server.listen(9999, () => {
    console.log("Server ready");
})