const mainRoute = require("./main/main");
const productsRoute = require("./products/productsRoute");
// const productRoute = require("./product/productRoute");
const signUpRoute = require("./signup/sign-up-route");

const router = {
  "/signup": signUpRoute,
  "/products": productsRoute,
  "/": mainRoute,
  default: mainRoute
};

module.exports = router;
