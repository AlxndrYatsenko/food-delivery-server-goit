const shortid = require("shortid");

const { writeFile } = require("../../utils/fs");
const { getAllUsers } = require("../../servises/services");
const { usersPath } = require("../../servises/path");

const getUser = id => {
  const allUsers = getAllUsers();
  const responseData = allUsers.find(u => u.id.toString() === id);
  return responseData;
};

const createUser = body => {
  const allUsers = getAllUsers();

  const newUser = [{ id: shortid.generate(), ...body }];
  const newData = allUsers.concat(newUser);

  return writeFile(usersPath, JSON.stringify(newData))
    .then(() => newUser)
    .catch(error => console.log(error));
};
module.exports = { getUser, getAllUsers, createUser };
