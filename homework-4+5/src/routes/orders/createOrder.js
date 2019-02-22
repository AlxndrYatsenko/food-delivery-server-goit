const fs = require("fs");
const path = require("path");
const { writeFile } = require("../../utils/fs");
const { sendError, sendSuccess } = require("../../servises/send");
const { getNewId } = require("../../servises/services");

const createOrder = (req, res) => {
  const body = req.body;
  const { user } = req.body;
  const newOrder = { ...{ id: getNewId() }, ...body };

  const USERS_FOLDER = path.join(__dirname, "../..", "db", "users");
  const userFolderName = "user-" + user;
  const userFolderPath = path.join(USERS_FOLDER, userFolderName);
  const userOrdersFolder = path.join(userFolderPath, "orders");
  const userOrdersPath = path.join(userOrdersFolder, getNewId() + ".json");

  const checkHasFolder = path => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  };

  Promise.resolve(checkHasFolder(userFolderPath))
    .then(checkHasFolder(userOrdersFolder))
    .then(writeFile(userOrdersPath, JSON.stringify(newOrder)))
    .then(sendSuccess(res, newOrder, "order"))
    .catch(error => sendError(res, error));
};

module.exports = createOrder;
