const Product = require("../../../models/schemas/product");
const url = require("url");
const { sendSuccess, sendError } = require("../../../servises/send");

const getArrFromQuery = str => str.replace(/\'|"|\s/g, "").split(",");

const productsRoute = (req, res) => {
  const {
    query: { category, ids }
  } = url.parse(req.url, true);

  const getProducts = () => {
    if (category) {
      const categoriesArr = getArrFromQuery(category);
      return Product.find({ categories: categoriesArr });
    }

    if (ids) {
      const idsArr = getArrFromQuery(ids);
      return Product.find({ _id: idsArr });
    }

    if (!category && !ids) {
      return Product.find();
    }
  };

  return Promise.resolve(getProducts())
    .then(allProducts => sendSuccess(res, allProducts, "products"))
    .catch(error => sendError(res, error));
};

module.exports = productsRoute;
