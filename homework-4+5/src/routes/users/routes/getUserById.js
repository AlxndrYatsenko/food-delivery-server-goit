const { getAllUsers, getItemById } = require("../../../servises/services");
const {
  sendSuccess,
  sendNotFound,
  sendError
} = require("../../../servises/send");

const getUserById = (req, res) => {
  const id = req.params.id;
  getAllUsers()
    .then(allUsers => getItemById(allUsers, id))
    .then(user => (user ? sendSuccess(res, user, "user") : sendNotFound(res)))
    .catch(error => sendError(res, error));
};

module.exports = getUserById;
