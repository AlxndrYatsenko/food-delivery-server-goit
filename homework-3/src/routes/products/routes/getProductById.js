const { getAllProducts } = require("../../../servises/services");
const {
  sendNotFound,
  sendSuccess,
  sendError
} = require("../../../servises/send");

const getProductById = (req, res) => {
  const id = req.params.id;
  getAllProducts()
    .then(allProducts => allProducts.find(p => p.id.toString() === id))
    .then(product =>
      product ? sendSuccess(res, product, "product") : sendNotFound(res)
    )
    .catch(error => sendError(res, error));
};

module.exports = getProductById;
