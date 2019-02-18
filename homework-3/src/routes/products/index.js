const getProductById = require("./routes/getProductById");
const updateProduct = require("./routes/updateProduct");
const createProduct = require("./routes/createProduct");
const productsRoute = require("./routes/productsRoute");

module.exports = {
  getProductById,
  updateProduct,
  createProduct,
  productsRoute
};
