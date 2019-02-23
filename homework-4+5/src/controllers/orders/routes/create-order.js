const Order = require("../../../models/schemas/order");
const { sendError, sendCreateSuccess } = require("../../../servises/send");

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
};

module.exports = createOrder;
