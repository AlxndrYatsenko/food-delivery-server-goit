const fs = require("fs");
const url = require("url");
const { getAllProducts } = require("../../../servises/services");
const { productsPath } = require("../../../servises/path");
const { sendSuccess, sendError } = require("../../../servises/send");
const { getProductsByIds, getProductsByCategory } = require("./helpers");

const productsRoute = (req, res) => {
  const {
    query: { category, ids }
  } = url.parse(req.url, true);

  getAllProducts()
    .then(allProducts => {
      if (category) {
        return getProductsByCategory(category, allProducts);
      }

      if (ids) {
        return getProductsByIds(ids, allProducts);
      }
    })
    .then(responseData => {
      return sendSuccess(res, responseData, "products");
    })
    .catch(error => sendError(res, error));

  if (!category && !ids) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    const readStream = fs.createReadStream(productsPath);
    readStream.pipe(res);
  }
};

module.exports = productsRoute;
