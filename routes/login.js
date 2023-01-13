const express = require("express");
const { localStorage } = require("node-localstorage");
const router = express.Router();
const fs = require("fs");

router.get("/login", (req, res, next) => {
  res.send(`
    <form action="/verify" method="POST" onsubmit=onSubmit() >
        <lable> Username: </lable>
        <input name="username" id="username"/><br/>
        <button type="submit">Login</button>
    </form>
    <script>
        function onSubmit(){
            var username = document.getElementById("username").value;
            console.log(localStorage);
            alert(username);
            localStorage.setItem("username", username);
            alert("second");
        };
    </script>
    `);
});

router.post("/verify", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
