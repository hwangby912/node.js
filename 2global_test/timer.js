const timeout = setTimeout(() => {
    console.log("1.5초 후 실행");
}, 1500);
//timeout이라는 변수가 setTimeout의 함수를 호출함

const interval = setInterval(() => {
    console.log("1초 마다 수행");
}, 1000);

const timeout2 = setTimeout(() => {
    console.log("실행 되지 않습니다. ")
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
    console.log("실행 되지 않습니다. ")
});

clearImmediate(immediate2);