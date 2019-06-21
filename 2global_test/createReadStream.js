const fs = require("fs");

const readStream = fs.createReadStream("./createReadStream.js", {
    highWaterMark : 16
});
const data = [];

// on: event listener를 등록
readStream.on("data", (chunk) => {
    data.push(chunk);
    console.log("data :", chunk, chunk.length);
}); 

readStream.on("end", () => {
    console.log("end :", Buffer.concat(data).toString());
});

readStream.on("error", (err) => {
    console.log("error :", err);
});
