const Order = require("../../../models/schemas/order");
const Product = require("../../../models/schemas/product");
const User = require("../../../models/schemas/user");
const { sendError, sendCreateSuccess } = require("../../../servises/send");

const createOrder = (req, res) => {
  const body = req.body;
  const userId = req.body.creator;
  const productsList = req.body.productsList;
  const idsArr = productsList.map(({ product }) => product);

  const orderData = {
    ...body
  };

  const areExistProducts = () => {
    return Product.find({ _id: idsArr }).then(
      allProducts => allProducts.length === idsArr.length
    );
  };

  const isExistUser = () => {
    return User.find({ _id: userId }).then(user => !!user[0]._id);
  };

  const canSave = areExistProducts() && isExistUser();

  const newOrder = new Order(orderData);

  if (canSave) {
    return newOrder
      .save()
      .then(newOrder => sendCreateSuccess(res, newOrder, "order"))
      .catch(error => sendError(res, error));
  }
};

module.exports = createOrder;
