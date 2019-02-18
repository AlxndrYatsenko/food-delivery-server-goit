const { sendCreateSuccess, sendError } = require("../../../servises/send");
const { makeProduct } = require("./helpers");

const createProduct = (req, res) => {
  const body = req.body;
  makeProduct(body)
    .then(newProduct => sendCreateSuccess(res, newProduct))
    .catch(error => sendError(error));
};

module.exports = createProduct;
