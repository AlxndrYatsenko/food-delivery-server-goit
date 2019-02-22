const {
  sendSuccess,
  sendNotFound,
  sendError
} = require("../../../servises/send");
const User = require("../../../models/modules/db/schemas/user");

const getUserById = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(user => (user ? sendSuccess(res, user, "user") : sendNotFound(res)))
    .catch(error => sendError(res, error));
};

module.exports = getUserById;
