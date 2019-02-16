const path = require("path");
const fs = require("fs");
const { categoriesPath, productsPath } = require("../servises/path");
const { readFile } = require("../utils/fs");

const getValues = arr =>
  arr.map(({ id, sku, name, description }) => {
    return { id, sku, name, description };
  });

const getDate = () => {
  const date = new Date();
  const checkNumber = num => (num < 10 ? "0" + num : num);
  const day = checkNumber(date.getDate());
  const month = checkNumber(date.getMonth() + 1);
  const year = date.getFullYear();

  return day + "-" + month + "-" + year;
};

const getParsedFile = filePath => {
  return readFile(filePath, "utf8").then(data => JSON.parse(data));
  // return JSON.parse(allCategory);
};

const getAllCategories = () => {
  // const filePath = path.join(
  //   __dirname,
  //   "../db/categories",
  //   "all-categories.json"
  // );
  return getParsedFile(categoriesPath);
};

const getAllProducts = () => {
  // const filePath = path.join(__dirname, "../db/products", "all-products.json");
  return getParsedFile(productsPath);
};

const getAllUsers = () => {
  const filePath = path.join(__dirname, "../db/users", "all-users.json");
  return getParsedFile(filePath);
};

module.exports = {
  getValues,
  getDate,
  getParsedFile,
  getAllCategories,
  getAllProducts,
  getAllUsers
};
