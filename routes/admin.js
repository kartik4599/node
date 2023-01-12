const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(`
    <form action="/product" method="POST"> 
      <lable> Product Name</lable>
      <input name="name" />
      <br/>
      <lable>Quantity</lable>
      <input name="size" />
      <br/>
      <button type="submit">Add</button>
    </form>
    `);
});

router.post("/product", (req, res, next) => {
  console.log("Name => " + req.body.name);
  console.log("Quantity => " + req.body.name);
  res.redirect("/");
});

module.exports = router;
