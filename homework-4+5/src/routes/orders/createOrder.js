const Order = require("../../models/modules/db/schemas/order");
const fs = require("fs");
const path = require("path");
const { writeFile } = require("../../utils/fs");
const {
  sendError,
  sendCreateSuccess,
  sendSuccess
} = require("../../servises/send");
const { getNewId } = require("../../servises/services");

const createOrder = (req, res) => {
  const body = req.body;
  const orderData = {
    ...body
  };

  const newOrder = new Order(orderData);

  return newOrder
    .save()
    .then(newOrder => sendCreateSuccess(res, newOrder, "order"))
    .catch(error => sendError(res, error));
  // const body = req.body;
  // const { order } = req.body;
  // const newOrder = { ...{ id: getNewId() }, ...body };
  // const USERS_FOLDER = path.join(__dirname, "../..", "db", "orders");
  // const orderFolderName = "order-" + order;
  // const orderFolderPath = path.join(USERS_FOLDER, orderFolderName);
  // const orderOrdersFolder = path.join(orderFolderPath, "orders");
  // const orderOrdersPath = path.join(orderOrdersFolder, getNewId() + ".json");
  // const checkHasFolder = path => {
  //   if (!fs.existsSync(path)) {
  //     fs.mkdirSync(path);
  //   }
  // };
  // Promise.resolve(checkHasFolder(orderFolderPath))
  //   .then(checkHasFolder(orderOrdersFolder))
  //   .then(writeFile(orderOrdersPath, JSON.stringify(newOrder)))
  //   .then(sendSuccess(res, newOrder, "order"))
  //   .catch(error => sendError(res, error));
};

module.exports = createOrder;
