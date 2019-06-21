const fs = require("fs");

const readStream = fs.createReadStream("./person.PNG");
const writeStream = fs.createWriteStream("./writepic3.PNG");
readStream.pipe(writeStream);
