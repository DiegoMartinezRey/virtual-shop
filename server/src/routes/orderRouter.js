const express = require("express");
const orderController = require("../controllers/orderController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOrderById);
router.post("/create", verifyToken, orderController.addOrder);

module.exports = router;
