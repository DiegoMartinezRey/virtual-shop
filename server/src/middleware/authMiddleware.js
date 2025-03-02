const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(400).json({ msg: "Missing token" });
  }

  const token = authHeader.split(" ")[1];

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
