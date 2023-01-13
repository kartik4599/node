const express = require("express");
const router = express.Router();
const fs = require("fs");

let msgData = "";

router.get("/", (req, res, next) => {
  fs.readFile("message.txt", "utf8", (e, d) => {
    msgData = d;
  });

  res.send(`
    <form action="/" method="POST" onsubmit=setValue()>
      <h3>${msgData}</h3>
      <lable>Message : <lable>
      <input id="username" name=username style="display:none"/>
      <input name="msg" /><br/>
      <button>Send</button>
    </form>
    <script>
      var setValue=()=>{
        document.getElementById("username").value = localStorage.getItem('username');
        alert("check");
      }
    </script>
    `);
});

router.post("/", (req, res, next) => {
  const send = `${req.body.username}:${req.body.msg} `;
  fs.appendFileSync("message.txt", send, (e) => {
    console.log(e);
  });
  res.redirect("/");
});

module.exports = router;
