const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/login", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
});

router.post("/verify", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
