const User = require("../../../models/schemas/users");
const {
  sendSuccess,
  sendNotFound,
  sendError
} = require("../../../servises/send");

const getUsers = (req, res) => {
  const id = req.params.id;

  User.find()
    .then(users =>
      users ? sendSuccess(res, users, "users") : sendNotFound(res)
    )
    .catch(error => sendError(res, error));
};

module.exports = getUsers;
