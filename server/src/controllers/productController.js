const Product = require("../models/Product");

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      return res.json(products);
    } catch (error) {
      res.status(500).send("Not find any product");
    }
  },
  addProduct: async (req, res) => {
    try {
      const { name, description, price, stock, imageUrl, category } = req.body;

      if (!name || !price) {
        return res
          .status(400)
          .json({ error: "El nombre y el precio son obligatorios." });
      }

      const user = await Product.create({
        name,
        description,
        price,
        stock: stock || 0,
        imageUrl,
        category,
        user: req.user._id,
      });

      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(400).send("Failed to create product");
    }
  },
};

module.exports = productController;
