const app = require("express")();
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const loginRouter = require("./routes/login");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(loginRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found<h1>");
});

app.listen(4000);
