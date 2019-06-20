const fs = require("fs");

fs.readFile("C:\\Users\\HBY\\Desktop\\Java\\4Nodejs\\picture\\person.PNG", (err, data) => {
    // 해당 함수의 결과물을 가지고 어떤 일을 수행할 때 callback 함수를 쓴다. 
    // readFile, writeFile 모두 비동기 함수이다. 
    // readFile("읽고 싶은 파일명 경로", 수행된 후의 callback 함수)
    // ../picture/person.PNG
    if (err) {
        throw err;
    }

    fs.writeFile("./person.PNG", data, (err) => { 
        // writeFile("생성될 파일명", "쓰고 싶은 내용", 수행된 후의 callback 함수)
        if (err) {
            throw err;
        }
        console.log("잘 copy 되었습니다. ");
    });
});
