const User = require("../../../models/modules/db/schemas/user");
const {
  sendSuccess,
  sendNotFound,
  sendError
} = require("../../../servises/send");

const getUser = (req, res) => {
  const id = req.params.id;

  User.deleteOne({ _id: id })
    .then(user => (user ? sendSuccess(res, user, "user") : sendNotFound(res)))
    .catch(error => sendError(res, error));
};

module.exports = getUser;
