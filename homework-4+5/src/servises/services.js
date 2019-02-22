const shortid = require("shortid");

const { readFile } = require("../utils/fs");
const { categoriesPath, productsPath, usersPath } = require("../servises/path");

const getValues = arr =>
  arr.map(({ id, sku, name, description }) => {
    return { id, sku, name, description };
  });

const getNewId = () => shortid.generate();

const getDate = () => {
  const date = new Date();
  const checkNumber = num => (num < 10 ? "0" + num : num);
  const day = checkNumber(date.getDate());
  const month = checkNumber(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const getParsedFile = filePath => {
  return readFile(filePath, "utf8").then(allCategory =>
    JSON.parse(allCategory)
  );
};

const getItemById = (arr, id) => {
  return arr.find(u => u.id.toString() === id);
};

const getAllCategories = () => {
  return getParsedFile(categoriesPath);
};

const getAllProducts = () => {
  return getParsedFile(productsPath);
};

const getAllUsers = () => {
  return getParsedFile(usersPath);
};

module.exports = {
  getValues,
  getItemById,
  getNewId,
  getDate,
  getParsedFile,
  getAllCategories,
  getAllProducts,
  getAllUsers
};
