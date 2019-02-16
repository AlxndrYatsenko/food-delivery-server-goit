const path = require("path");
const fs = require("fs");

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
  const filePath = path.join(
    __dirname,
    "../db/categories",
    "all-categories.json"
  );
  return getParsedFile(filePath);
};

const getAllProducts = () => {
  const filePath = path.join(__dirname, "../db/products", "all-products.json");
  return getParsedFile(filePath);
};

const getAllUsers = () => {
  const filePath = path.join(__dirname, "../db/users", "all-users.json");
  return getParsedFile(filePath);
};

module.exports = {
  getDate,
  getParsedFile,
  getAllCategories,
  getAllProducts,
  getAllUsers
};
