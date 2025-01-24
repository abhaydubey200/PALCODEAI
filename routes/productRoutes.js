const express = require("express");
const { createProduct, getTopProducts } = require("../controllers/productController");

const router = express.Router();

router.post("/", createProduct);

router.get("/top", getTopProducts);

module.exports = router;
