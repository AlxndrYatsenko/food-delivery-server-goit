const fs = require("fs");
const path = require("path");
const getDate = require("../../servises/services");

const filePath = path.join(
  __dirname,
  "../../",
  "db/products/",
  "all-products.json"
);

const getProductById = (req, res) => {
  const id = req.params.id;

  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  const updatedProduct = parsedData.find(p => p.id.toString() === id);

  updatedProduct
    ? res.status(200).json({ status: "success", products: updatedProduct })
    : res.status(404).json({ status: "not found" });
};
const updateProduct = (req, res) => {
  const id = req.params.id;

  const data = fs.readFileSync(filePath, "utf8");

  const parsedData = JSON.parse(data);
  const oldProduct = parsedData.find(p => p.id.toString() === id);

  if (!oldProduct) return res.status(404).json({ status: "not found" });

  const parsedDataWithOutOld = parsedData.filter(p => p.id.toString() !== id);

  const newProduct = req.body;

  const updatedData = { modified: getDate() };

  const updatedProduct = { ...oldProduct, ...newProduct, ...updatedData };

  const newData = parsedDataWithOutOld.concat(updatedProduct);

  res.status(200).json({ status: "success", product: updatedProduct });

  fs.writeFile(filePath, JSON.stringify(newData), function(error) {
    if (error) res.send(error);
  });
};
module.exports = { getProductById, updateProduct };
