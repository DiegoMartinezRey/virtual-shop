const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).json({ msg: "Missing token" });
  }
  try {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send("Token is invalid");
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    return res.status(404).json({ msg: "Token not valid or expired" });
  }
};

module.exports = verifyToken;
