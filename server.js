const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
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

app.use("/product", (req, res, next) => {
    console.log("Name => "+ req.body.name);
    console.log("Quantity => "+ req.body.name);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to Project</h1>");
});

app.listen(4000);
