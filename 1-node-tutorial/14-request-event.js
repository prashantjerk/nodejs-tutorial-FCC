const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Server created.");
// });

// Using Event Emitter API
const server = http.createServer();
// emit request event
// subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Server Created");
});

server.on("close", () => {
  console.log("Server is closing...");
});

server.listen(5000);
