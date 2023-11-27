const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") res.write("Welcome to our home page.");
  else if (req.url == "/about") res.write("This is ABOUT page.");
  else res.write(`<h1>Oops! Page not found!</h1>`);
  res.end();
});

server.listen(3000);
