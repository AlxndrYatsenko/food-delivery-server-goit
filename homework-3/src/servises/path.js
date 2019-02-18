const path = require("path");
const categoriesPath = path.join(
  __dirname,
  "../db/categories",
  "all-categories.json"
);

const productsPath = path.join(
  __dirname,
  "../db/products",
  "all-products.json"
);

const usersPath = path.join(__dirname, "../db/users", "all-users.json");

module.exports = { categoriesPath, productsPath, usersPath };
