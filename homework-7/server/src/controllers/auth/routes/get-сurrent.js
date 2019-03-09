const jwt = require("jsonwebtoken");
const User = require("../../../models/schemas/user");
const {
  sendSuccess,
  sendNotFound,
  sendError
} = require("../../../servises/send");

const current = (req, res) => {
  const { token } = req.body;
  const userId = jwt.decode(token).userId;
  User.findById(userId)
    .then(user => (user ? sendSuccess(res, user, "user") : sendNotFound(res)))
    .catch(error => sendError(res, error));
};

module.exports = current;
