const Order = require("../../../models/schemas/order");
const {
  sendSuccess,
  sendNotFound,
  sendError
} = require("../../../servises/send");

const getOrderById = (req, res) => {
  const id = req.params.id;

  Order.findById(id)
    .then(order =>
      order ? sendSuccess(res, order, "order") : sendNotFound(res)
    )
    .catch(error => sendError(res, error));
};

module.exports = getOrderById;
