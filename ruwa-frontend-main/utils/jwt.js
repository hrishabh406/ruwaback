const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET_KEY;

function generateToken(user) {
  return jwt.sign({ id: user._id, phone: user.phone }, SECRET, { expiresIn: "7d" });
}

module.exports = { generateToken };
