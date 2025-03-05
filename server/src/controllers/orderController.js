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
      const userId = req.params.id;

      const orders = await Order.find({ user: userId });

      if (!orders || orders.length === 0) {
        return res.status(203).send("Orders not found");
      }

      const populatedOrders = await Order.populate(orders, {
        path: "items.product",
      });

      return res.json(populatedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).send("Error fetching orders");
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
