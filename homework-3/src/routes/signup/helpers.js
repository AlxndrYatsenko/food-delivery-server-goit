const path = require("path");
const shortid = require("shortid");
const { writeFile } = require("../../utils/fs");

const saveUser = user => {
  const userName = user.username;
  const filePath = path.join(
    __dirname,
    "../../",
    "db/users",
    `${userName}-${shortid.generate()}.json`
  );

  return writeFile(filePath, JSON.stringify(user));
};

module.exports = saveUser;
