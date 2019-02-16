const fs = require("fs");
const path = require("path");
const shortid = require("shortid");
const { getAllCategories } = require("../../servises/services");

const createCategory = body => {
  const filePath = path.join(
    __dirname,
    "../../db/categories",
    "all-categories.json"
  );
  const allCategory = getAllCategories();

  // const requestData = ({ categories }) => {
  //   const categoriesArr = categories
  //     .split(",")
  //     .map(c => c.replace(/[^-a-z]/gim, ""));

  //   const changedRequestData = {
  //     ...body,
  //     // ...{
  //     //   created: getDate(),
  //     //   categories: categoriesArr
  //     // }
  //   };

  //   return changedRequestData;
  // };

  const newProduct = [{ id: shortid.generate(), ...body }];

  const newData = allCategory.concat(newProduct);

  fs.writeFile(filePath, JSON.stringify(newData), function(error) {
    if (error) throw error;
  });
  return newProduct;
};

module.exports = { createCategory };
