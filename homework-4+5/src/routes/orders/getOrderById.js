const { sendSuccess, sendNotFound, sendError } = require("../../servises/send");

const Order = require("../../models/modules/db/schemas/order");

const getOrderById = (req, res) => {
  const id = req.params.id;

  Order.findById(id)
    .then(order =>
      order ? sendSuccess(res, order, "order") : sendNotFound(res)
    )
    .catch(error => sendError(res, error));
};

module.exports = getOrderById;
