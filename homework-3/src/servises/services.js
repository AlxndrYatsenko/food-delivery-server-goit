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
  const allCategory = fs.readFileSync(filePath, "utf8");
  return JSON.parse(allCategory);
};

const getAllCategories = () => {
  return getParsedFile(categoriesPath);
};

const getAllProducts = () => {
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
