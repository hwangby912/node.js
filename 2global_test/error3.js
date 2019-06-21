process.on("uncaughtException", (err) => {
    console.error("에기치 못한 에러", err);
});

setInterval(() => {
    throw new Error("서버 고장");
}, 1000);

setTimeout(() => {
    console.log("실행");
}, 2000);