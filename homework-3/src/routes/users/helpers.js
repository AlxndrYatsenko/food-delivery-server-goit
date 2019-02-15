const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const filePath = path.join(__dirname, "../../", "db/users/", "all-users.json");

const getUser = id => {
  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  const responseData = parsedData.find(u => u.id.toString() === id);
  return responseData;
};

const createUser = body => {
  const allUsers = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(allUsers);

  const newUser = [{ id: shortid.generate(), ...body }];

  const newData = parsedData.concat(newUser);

  fs.writeFile(filePath, JSON.stringify(newData), function(error) {
    if (error) throw error;
  });

  return newUser;
};
module.exports = { getUser, createUser };
