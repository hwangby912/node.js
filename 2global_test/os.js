const os = require("os");
const freemem_ = os.freemem();
const totalmem = os.totalmem();
const percentage = freemem_ / totalmem * 100;
const memUsagePer = parseInt(percentage);
const freeSpacePer = 100 - memUsagePer;

module.exports = {memUsagePer, freeSpacePer};

// console.log("freemem: " + os.freemem());
// console.log("totalmem: " + os.totalmem());
// console.log("memUsage(Float): " + percentage + "%");
// console.log("free space: " + freeSpacePer);
