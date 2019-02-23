const getProductById = require("./routes/get-product");
const updateProduct = require("./routes/update-product");
const createProduct = require("./routes/create-product");
const productsRoute = require("./routes/get-products");

module.exports = {
  getProductById,
  updateProduct,
  createProduct,
  productsRoute
};
