const app = require("express")();
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const loginRouter = require("./routes/login");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRouter);
app.use(loginRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});

app.listen(4000);
