const { writeFile } = require("../../../utils/fs");
const {
  getAllUsers,
  getItemById,
  getNewId
} = require("../../../servises/services");
const { usersPath } = require("../../../servises/path");

const createNewUser = body => {
  const newUser = { id: getNewId(), ...body };

  return getAllUsers()
    .then(allUsers => allUsers.concat(newUser))
    .then(newData => {
      writeFile(usersPath, JSON.stringify(newData));
      return newUser;
    })
    .catch(error => console.log(error));
};
module.exports = { getItemById, createNewUser };
