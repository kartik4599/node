const express = require("express");
const router = express.Router();
const path = require("path");
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log("Name => " + req.body.name);
  console.log("Quantity => " + req.body.name);
  res.redirect("/");
});

router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.post("/success",(req,res,next)=>{
  res.send("<h1>Form successfuly filled</h1>")
})
module.exports = router;
