const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const filePath = path.join(__dirname, "../../", "db/users/", "all-users.json");

const getAllUsers = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

const getUser = id => {
  const allUsers = getAllUsers();
  const responseData = allUsers.find(u => u.id.toString() === id);
  return responseData;
};

const createUser = body => {
  const allUsers = getAllUsers();

  const newUser = [{ id: shortid.generate(), ...body }];
  const newData = allUsers.concat(newUser);

  const responseData = JSON.stringify(newData);

  fs.writeFile(filePath, responseData, function(error) {
    if (error) resizeBy.send(error);
  });

  return newUser;
};
module.exports = { getUser, getAllUsers, createUser, filePath };
