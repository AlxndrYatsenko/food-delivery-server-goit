const Product = require("../../../models/schemas/product");
const {
  sendNotFound,
  sendSuccess,
  sendError
} = require("../../../servises/send");

const updateProduct = (req, res) => {
  const newProduct = req.body;
  const id = req.params.id;

  Product.findOneAndUpdate({ _id: id }, newProduct, { new: true })
    .then(product =>
      product ? sendSuccess(res, product, "product") : sendNotFound(res)
    )
    .catch(error => sendError(res, error));
};
module.exports = updateProduct;
