const { writeFile } = require("../../../utils/fs");
const { usersPath } = require("../../../servises/path");
const { getAllUsers, getItemById } = require("../../../servises/services");
const {
  sendSuccess,
  sendNotFound,
  sendError
} = require("../../../servises/send");

const updateUser = async (req, res) => {
  const id = req.params.id;
  const newUser = req.body;

  try {
    const allUsers = await getAllUsers();

    const prevUser = await getItemById(allUsers, id);

    if (!prevUser) return sendNotFound(res);

    const updatedUser = { ...prevUser, ...newUser };

    const newData = allUsers.map(user =>
      user.id.toString() === id ? { ...updatedUser } : user
    );

    return writeFile(usersPath, JSON.stringify(newData))
      .then(sendSuccess(res, updatedUser, "user"))
      .catch(error => sendError(res, error));
  } catch (e) {
    console.log(e);
  }
};

module.exports = updateUser;
