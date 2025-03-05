const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const saltRounds = 10;

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find();
      return res.json(user);
    } catch (error) {
      res.status(500).send("Not find any user");
    }
  },
  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById({ _id: userId });
      return res.json(user);
    } catch (error) {
      res.status(500).send("Not find any user");
    }
  },
  addUser: async (req, res) => {
    try {
      const { name, lastName, email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ msg: "Invalid email or password" });
      }
      const encryptedPassword = await bcrypt.hash(password, saltRounds);
      const user = await User.create({
        name: name,
        lastName: lastName,
        email: email,
        password: encryptedPassword,
      });
      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(400).send("Failed to create user");
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body
      );
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(404).send("User cannot be update");
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.id });
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(404).send("User cannot be deleted");
    }
  },
  checkUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      const userFound = await User.findOne({ email }).select("+password");

      if (!userFound) {
        return res.status(400).json({ msg: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, userFound.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid password" });
      }

      const token = jwt.sign(
        {
          _id: userFound._id,
          email: userFound.email,
          name: userFound.name,
          lastName: userFound.lastName,
          role: userFound.role,
        },
        process.env.SECRET,
        { expiresIn: "7d" }
      );

      return res.status(200).json({
        msg: "UserLogged",
        token,
        _id: userFound._id,
        name: userFound.name,
        lastName: userFound.lastName,
        role: userFound.role,
      });
    } catch (error) {
      console.error("Error in login:", error);
      return res.status(500).json({ msg: "Error logging in", error });
    }
  },
};

module.exports = userController;
