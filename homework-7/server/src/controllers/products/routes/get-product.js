const Product = require("../../../models/schemas/product");
const {
  sendNotFound,
  sendSuccess,
  sendError
} = require("../../../servises/send");

const getProductById = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    // .then(res => {
    //   console.log(res);
    //   return () => res;
    // })
    .populate("ingredients", "name")
    .then(product =>
      product ? sendSuccess(res, product, "product") : sendNotFound(res)
    )
    .catch(error => sendError(res, error));
};

module.exports = getProductById;
