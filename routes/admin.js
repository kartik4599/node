const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require("../controller/product");

router.get("/add-product", productController.getAddProduct);

router.post("/product", productController.postProduct);

router.get("/contactus",productController.getContact);

router.post("/success",productController.postContact);

module.exports = router;
