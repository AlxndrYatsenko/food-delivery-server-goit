const jwt = require("jsonwebtoken");
const { secretKey } = require("../../../config");

const getToken = req =>
  req.body.token || req.query.token || req.headers["x-access-token"];

const checkToken = (req, res, next) => {
  const token = getToken(req);

  if (!token) {
    return res.status(403).send({
      success: false,
      message: "No token provided.",
    });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.json({
        success: false,
        message: "Failed to authenticate token.",
      });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = checkToken;
