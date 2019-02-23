const Product = require("../../../models/modules/db/schemas/product");
const {
  sendNotFound,
  sendSuccess,
  sendError
} = require("../../../servises/send");

const getProductById = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then(user => (user ? sendSuccess(res, user, "user") : sendNotFound(res)))
    .catch(error => sendError(res, error));
};

module.exports = getProductById;
