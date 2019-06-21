const f = () => {
    console.log("Start");
    try {
        throw new Error("Server Error");
    } catch(err) {
        clearInterval(f); 
        // 본인의 함수가 호출 되었을때 자신의 함수를 취소하는 것은 불가
    }
    console.log("Hello");
};

setInterval(f, 1000);