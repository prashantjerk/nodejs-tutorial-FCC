const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`This is ${name} and he is ${age}.`);
});

customEmitter.emit("response", 'Peter', 34);  
