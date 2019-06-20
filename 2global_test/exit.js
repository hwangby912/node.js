let i = 1;

setInterval(() => {
    if(i === 5) {
        console.log("exit");
        process.exit(0);
    }

    console.log(i);
    i++;
}, 1000);