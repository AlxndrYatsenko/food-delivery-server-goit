const fs = require("fs");
const path = require("path");
const { writeFile } = require("../../utils/fs");
const { sendError, sendSuccess, sendFaild } = require("../../servises/send");
const { getNewId, getAllProducts } = require("../../servises/services");

const createOrder = (req, res) => {
  const body = req.body;
  const { user, products } = req.body;
  const newOrder = { ...{ id: getNewId() }, ...body };

  const USERS_FOLDER = path.join(__dirname, "../..", "db", "users");
  const userFolderName = "user-" + user;
  const userFolderPath = path.join(USERS_FOLDER, userFolderName);
  const userOrdersFolder = path.join(userFolderPath, "orders");
  const userOrdersPath = path.join(userOrdersFolder, getNewId() + ".json");

  const isEqualLength = (arr1, arr2) => arr1.length === arr2.length;
  const getProductsByIds = (productsArr, idsArr) =>
    productsArr.filter(p => idsArr.find(id => p.id.toString() === id));

  const checkHasFolder = path => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  };

  const addNewOrder = () => {
    Promise.resolve(checkHasFolder(userFolderPath))
      .then(checkHasFolder(userOrdersFolder))
      .then(writeFile(userOrdersPath, JSON.stringify(newOrder)))
      .then(sendSuccess(res, newOrder, "order"))
      .catch(error => sendError(res, error));
  };

  getAllProducts()
    .then(allProducts => getProductsByIds(allProducts, products))
    .then(filtredProducts => isEqualLength(filtredProducts, products))
    .then(isEqual => (isEqual ? addNewOrder() : sendFaild(res)))
    .catch(error => sendError(res, error));
};

module.exports = createOrder;
