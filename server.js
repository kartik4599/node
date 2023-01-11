const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.write(`<html><body><h1>Welcome home</h1><body><html>`);
  }
  if (req.url === "/about") {
    res.write(`<html><body><h1>About us page</h1><body><html>`);
  }
  if (req.url === "/node") {
    res.write(`<html><body><h1>Welcome to node project </h1><body><html>`);
  }
  if (req.url === "/") {
    res.write(
      `<html><body>
      <h3><a href="/home">Go to home</a> </h3>
      <h3><a href="/about">Go to about page</a> </h3>
      <h3><a href="/node">Go to node page</a> </h3>
      <body><html>`
    );
  }
  // res.write(`<html><body><h1>Hii</h1><body><html>`);
});

server.listen(4000);
