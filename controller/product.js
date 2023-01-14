const path = require("path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postProduct = (req, res, next) => {
  console.log("Name => " + req.body.name);
  console.log("Quantity => " + req.body.name);
  res.redirect("/");
};

exports.getContact = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
};

exports.postContact = (req, res, next) => {
  res.send("<h1>Form successfuly filled</h1>");
};
