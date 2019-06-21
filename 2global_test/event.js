const Event = require("events");
const myEvent = new Event();
const f = () => {
    console.log("event1 occurs");
}

myEvent.addListener("event1", f);

myEvent.addListener("event1", () => {
    console.log("event1 occurs");
});

myEvent.on("event1", () => {
    console.log("event1 occurs");
});

myEvent.once("event2", () => {
    console.log("event2 occurs");
});

myEvent.removeListener("event1", f);
myEvent.emit("event1");

console.log(myEvent.listenerCount("event2"));