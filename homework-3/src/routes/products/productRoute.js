const fs = require("fs");
const path = require("path");
const getDate = require("../../servises/services");

const getProductById = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db/products/",
    "all-products.json"
  );
  const id = req.params.id;

  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  const updatedProduct = parsedData.find(p => p.id.toString() === id);

  updatedProduct
    ? res.status(200).json({ status: "success", products: updatedProduct })
    : res.status(404).json({ status: "not found" });
};
const updateProduct = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db/products/",
    "all-products.json"
  );
  //===========================
  // var id = parseInt(req.params.id);
  // var updatedCustomer = req.body;
  // if (customers["customer" + id] != null) {
  //   // updateProduct data
  //   customers["customer" + id] = updatedCustomer;

  //   console.log(
  //     "--->updateProduct Successfully, customers: \n" +
  //       JSON.stringify(customers, null, 4)
  //   );

  //   // return
  //   res.end(
  //     "updateProduct Successfully! \n" + JSON.stringify(updatedCustomer, null, 4)
  //   );
  // } else {
  //   res.end(
  //     "Don't Exist Customer:\n:" + JSON.stringify(updatedCustomer, null, 4)
  //   );
  // }

  //===========================

  const id = req.params.id;

  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  const parsedDataWithOutOld = parsedData.filter(p => p.id.toString() !== id);

  const oldProduct = parsedData.find(p => p.id.toString() === id);
  const newProduct = req.body;

  const categoriesArr = newProduct.categories
    .split(",")
    .map(c => c.replace(/[^-a-z]/gim, ""));

  const updatedData = { categories: categoriesArr, modified: getDate() };

  const updatedProduct = { ...oldProduct, ...newProduct, ...updatedData };
  const newData = parsedDataWithOutOld.concat(updatedProduct);
  // const updatedProduct=

  updatedProduct
    ? res.status(200).json({ status: "success", products: updatedProduct })
    : res.status(404).json({ status: "not found" });

  fs.writeFile(filePath, JSON.stringify(newData), function(error) {
    if (error) res.send(error);
  });
};
module.exports = { getProductById, updateProduct };
