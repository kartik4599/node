const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

let msgData = "";

router.get("/", (req, res, next) => {
  fs.readFile("message.txt", "utf8", (e, d) => {
    msgData = d;
  });
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

router.post("/", (req, res, next) => {
  const send = `${req.body.username}:${req.body.msg} `;
  fs.appendFileSync("message.txt", send, (e) => {
    console.log(e);
  });
  res.redirect("/");
});

module.exports = router;
