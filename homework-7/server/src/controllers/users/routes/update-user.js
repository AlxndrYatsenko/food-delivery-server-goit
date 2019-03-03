const User = require("../../../models/schemas/user");
const {
  sendSuccess,
  sendNotFound,
  sendError
} = require("../../../servises/send");

const updateUser = async (req, res) => {
  const newUser = req.body;
  const id = req.params.id;

  User.findOneAndUpdate({ _id: id }, newUser, { new: true })
    .then(user => (user ? sendSuccess(res, user, "user") : sendNotFound(res)))
    .catch(error => sendError(res, error));
};

module.exports = updateUser;
