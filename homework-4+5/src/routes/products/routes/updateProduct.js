const { productsPath } = require("../../../servises/path");
const { writeFile } = require("../../../utils/fs");
const { getAllProducts, getDate } = require("../../../servises/services");
const { sendNotFound, sendSuccess } = require("../../../servises/send");

const updateProduct = (req, res) => {
  const id = req.params.id;

  const allProducts = getAllProducts();
  console.log(allProducts);

  const oldProduct = allProducts.find(c => c.id.toString() === id);

  if (!oldProduct) return sendNotFound(res);

  const newProduct = req.body;

  const updatedField = { modified: getDate() };

  const updatedProduct = { ...oldProduct, ...newProduct, ...updatedField };

  const newData = allProducts.map(c =>
    c.id.toString() === id ? { ...updatedProduct } : c
  );

  writeFile(productsPath, JSON.stringify(newData))
    .then(sendSuccess(res, updatedProduct))
    .catch(error => res.send(error));
};
module.exports = updateProduct;
