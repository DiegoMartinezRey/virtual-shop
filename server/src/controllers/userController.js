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
      const userInfo = req.params.id;
      const user = await User.findOne({ _id: userInfo }).populate("bookings");
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
    const { email, password } = req.body;
    const [userFound] = await User.find({ email: email });
    if (!userFound) return res.status(401).json({ msg: "User not found" });
    if (await bcrypt.compare(password, userFound.password)) {
      const token = jwt.sign({ email: userFound.email }, process.env.SECRET, {
        expiresIn: 3600, // 1 hour
      });
      const user = await User.findOne({ _id: userFound._id });
      return res.status(200).json({
        msg: "Userlogged",
        token,
        id: user._id,
        name: user.name,
        surname: user.surname,
        role: user.role,
      });
    }
    return res.status(404).json({ msg: "Password does not match" });
  },
  verifyToken: (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) res.status(400).json({ msg: "Missing token" });
    try {
      jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
          return res.status(401).send("Token is invalid");
        }
        req.user = decoded;
        return next();
      });
    } catch (error) {
      return res.status(404).json({ msg: "Token not valid or expired" });
    }
  },
};

module.exports = userController;
