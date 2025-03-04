const express = require("express");
const userController = require("../controllers/userController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", verifyToken, userController.getUserById);
router.post("/create", userController.addUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/login", userController.checkUser);

module.exports = router;
