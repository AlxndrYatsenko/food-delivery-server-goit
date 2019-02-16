const fs = require("fs");
const url = require("url");
const { getAllProducts } = require("../../servises/services");
const { productsPath } = require("../../servises/path");
const {
  sendCreateSuccess,
  sendSuccess,
  sendError
} = require("../../servises/send");
const {
  getProductsByIds,
  getProductsByCategory,
  createProduct
} = require("./helpers");

const productsRoute = (req, res) => {
  if (req.method === "GET") {
    const {
      query: { category, ids }
    } = url.parse(req.url, true);

    getAllProducts()
      .then(allProducts => {
        if (category) {
          console.log("from", category);
          console.log(getProductsByCategory(category, allProducts));
          return getProductsByCategory(category, allProducts);
        }

        if (ids) {
          console.log(ids);
          return getProductsByIds(ids, allProducts);
        }
      })
      .then(responseData => {
        console.log(responseData);
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
  }

  if (req.method === "POST") {
    const body = req.body;
    createProduct(body)
      .then(newProduct => sendCreateSuccess(res, newProduct))
      .catch(error => sendError(error));
  }
};

module.exports = productsRoute;
