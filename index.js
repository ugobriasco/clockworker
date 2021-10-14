const Worker = require("./Worker");

const myEventEmitter = new Worker();
myEventEmitter.loop(6000, () => commonEvent.emit("myEvent", "Hello there"));

const myWorker = new Worker();

// Loopable events
const build = () => console.log("Build");
const sleep = () => console.log("Sleep");
myWorker.loop(1000, () => build());
myWorker.loop(2000, () => sleep());

myWorker.listen("myEvent", data => console.log(data));
