const fs = require("fs");

const writeStream = fs.createWriteStream("./writeme2.txt");
writeStream.on("finish", () => {
    console.log("file write end");
});

writeStream.write("this txt write\n");
writeStream.write("once again");
writeStream.end();
