const { writeFile } = require("../../utils/fs");
const { getUser, getAllUsers, createUser, filePath } = require("./helpers");
const {
  sendCreateSuccess,
  sendSuccess,
  sendNotFound,
  sendError
} = require("../../servises/send");

const usersRoute = (req, res) => {
  if (req.method === "GET") {
    const id = req.params.id;

    const responseData = getUser(id);

    responseData ? sendSuccess(res, responseData, "user") : sendNotFound(res);
  }

  if (req.method === "POST") {
    const body = req.body;
    createUser(body)
      .then(newUser => sendCreateSuccess(res, newUser, "user"))
      .catch(error => sendError(res, error));
  }
};

const updateUser = (req, res) => {
  const id = req.params.id;

  const prevUser = getUser(id);

  if (!prevUser) return sendNotFound(res);

  const allUsers = getAllUsers();

  const newUser = req.body;

  const updatedUser = { ...prevUser, ...newUser };

  const newData = allUsers.map(user =>
    user.id.toString() === id ? { ...updatedUser } : user
  );

  writeFile(filePath, JSON.stringify(newData))
    .then(sendSuccess(res, updatedUser, "user"))
    .catch(error => sendError(res, error));
};

module.exports = { usersRoute, updateUser };
