const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    console.error("No token:");
    return res.status(401).json({ error: "unauthorized" });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Error verifying token: ", error.message);
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authMiddleware;
