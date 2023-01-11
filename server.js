const http = require("http");

let show = "";

const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.url === "/" && req.method === "POST") {
    const collect = [];
    req.on("data", (recived) => {
      collect.push(recived);
    });
    req.on("end", () => {
      const display = Buffer.concat(collect).toString();
      console.log(display);
      show = display.split("=")[1];
    });
  }

  res.write(
    `<html><body>
    <form action="/" method="POST"> 
    <h3>${show}<h3>
      <input name="message" /> 
      <button type="submit">Send</button>
    </form>
    <body><html>`
  );
  res.end();
});

server.listen(4000);
