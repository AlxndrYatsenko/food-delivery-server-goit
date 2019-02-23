const Product = require("../../../models/modules/db/schemas/product");
const { sendNotFound, sendSuccess } = require("../../../servises/send");

const updateProduct = (req, res) => {
  const newProduct = req.body;
  const id = req.params.id;

  Product.findOneAndUpdate({ _id: id }, newProduct, { new: true })
    .then(user => (user ? sendSuccess(res, user, "user") : sendNotFound(res)))
    .catch(error => sendError(res, error));
};
module.exports = updateProduct;
