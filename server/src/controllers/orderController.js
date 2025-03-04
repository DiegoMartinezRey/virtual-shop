const Order = require("../models/Order");

const orderController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      return res.json(orders);
    } catch (error) {
      res.status(500).send("Not find any product");
    }
  },
  getOrderById: async (req, res) => {
    try {
      const _id = req.params.id;
      const orders = await Order.findById({ _id });

      if (!orders) {
        return res.status(404).send("Order not found");
      }

      return res.json(orders);
    } catch (error) {
      res.status(500).send("Not find any product");
    }
  },
  addOrder: async (req, res) => {
    try {
      const { user, items, totalAmount, paymentStatus, stripePaymentIntentId } =
        req.body;

      if (!user || !items || !totalAmount || !paymentStatus) {
        return res.status(400).json({
          error:
            "El usuario, items, totalAmount y paymentStatus son obligatorios.",
        });
      }

      const order = await Order.create({
        user,
        items,
        totalAmount,
        paymentStatus,
        stripePaymentIntentId,
      });

      return res.status(201).json(order);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(400).send("Failed to create product");
    }
  },
};

module.exports = orderController;
