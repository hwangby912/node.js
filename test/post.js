var sendData = {
    name: "zerocho",
    birth: 1994
};
$(document).ready(function() {
    $.post("https://www.zerocho.com/api/post/json", sendData, 
    function(data, status) {
        console.log(data, status);
        alert(typeof data.message.birth);
    });
});
/*
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    if(xhr.status === 200 || xhr.status === 201) {
        console.log("OK", xhr.responseText);
    }
};
xhr.onerror = function() {
    console.error("Fail", xhr.responseText);	
};
xhr.open("GET", "https://www.zerocho.com/api/get");
xhr.send();
*/
/*
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState === xhr.DONE) {
        if(xhr.status === 200 || xhr.status === 201) {
            console.log("OK", xhr.responseText);
        } else {
            console.log("Fail", xhr.responseText);
        }
    }
};

xhr.open("GET", "https://www.zerocho.com/api/get");
xhr.send();
*/
