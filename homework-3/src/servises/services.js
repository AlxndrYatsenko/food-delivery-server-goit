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

const getAllCategories = () => {
  const filePath = path.join(
    __dirname,
    "../db/categories",
    "all-categories.json"
  );
  const allCategory = fs.readFileSync(filePath, "utf8");
  return JSON.parse(allCategory);
};

module.exports = { getDate, getAllCategories };
