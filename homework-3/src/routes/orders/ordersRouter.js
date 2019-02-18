const fs = require("fs");
const path = require("path");
const shortid = require("shortid");
const { writeFile } = require("../../utils/fs");
const { sendError, sendSuccess, sendFaild } = require("../../servises/send");
const { getAllProducts } = require("../../servises/services");

const ordersRouter = (req, res) => {
  const body = req.body;
  const { user, products } = req.body;

  const allProducts = getAllProducts();
  const productsByIds = allProducts.filter(p =>
    products.find(id => p.id.toString() === id)
  );
  const isAllProducts = productsByIds.length === products.length;

  const USERS_FOLDER = path.join(__dirname, "../..", "db", "users");
  const userFolderName = "user-" + user;
  const userFolderPath = path.join(USERS_FOLDER, userFolderName);
  const userOrdersFolder = path.join(userFolderPath, "orders");
  const userOrdersPath = path.join(
    userOrdersFolder,
    shortid.generate() + ".json"
  );
  const newOrder = { ...{ id: shortid.generate() }, ...body };

  const checkHasFolder = path => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  };

  !isAllProducts
    ? sendFaild(res)
    : Promise.resolve(checkHasFolder(userFolderPath))
        .then(checkHasFolder(userOrdersFolder))
        .then(writeFile(userOrdersPath, JSON.stringify(newOrder)))
        .then(sendSuccess(res, newOrder, "order"))
        .catch(error => sendError(res, error));
};
module.exports = ordersRouter;
