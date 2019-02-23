const User = require("../../../models/schemas/user");
const {
  sendSuccess,
  sendNotFound,
  sendError
} = require("../../../servises/send");

const getUserById = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(user => (user ? sendSuccess(res, user, "user") : sendNotFound(res)))
    .catch(error => sendError(res, error));
};

module.exports = getUserById;
