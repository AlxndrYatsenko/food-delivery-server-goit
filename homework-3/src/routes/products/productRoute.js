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
  const response = parsedData.find(p => p.id.toString() === id);

  response
    ? res.status(200).json({ status: "success", product: response })
    : res.status(404).json({ status: "not found" });
};

const updateProduct = (req, res) => {
  const id = req.params.id;

  const data = fs.readFileSync(filePath, "utf8");

  const parsedData = JSON.parse(data);
  const oldProduct = parsedData.find(p => p.id.toString() === id);

  if (!oldProduct) return res.status(404).json({ status: "not found" });

  const newProduct = req.body;

  const updatedField = { modified: getDate() };

  const updatedProduct = { ...oldProduct, ...newProduct, ...updatedField };

  const newData = allCategories.map(p =>
    p.id.toString() === id ? { ...updatedProduct } : p
  );

  res.status(200).json({ status: "success", product: updatedProduct });

  fs.writeFile(filePath, JSON.stringify(newData), function(error) {
    if (error) res.send(error);
  });
};
module.exports = { getProductById, updateProduct };
