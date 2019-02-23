const Product = require("../../../models/schemas/product");
const { sendCreateSuccess, sendError } = require("../../../servises/send");

const createProduct = (req, res) => {
  const product = req.body;

  const productData = {
    ...product
  };

  const newProduct = new Product(productData);

  return newProduct
    .save()
    .then(newProduct => sendCreateSuccess(res, newProduct, "product"))
    .catch(error => sendError(res, error));
};

module.exports = createProduct;
