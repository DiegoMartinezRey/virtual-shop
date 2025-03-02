const express = require("express");
const productController = require("../controllers/productController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.post("/create", verifyToken, productController.addProduct);

module.exports = router;
