const router = require("express").Router();
const mainRoute = require("./main/main");
const createOrder = require("./orders");
const { getUserById, createUser, updateUser } = require("./users");
const { imagesRoute } = require("./images");
const { signUpRoute } = require("./signup");
const {
  productsRoute,
  getProductById,
  updateProduct,
  createProduct
} = require("./products");

router
  .get("/", mainRoute)

  .get("/products", productsRoute)
  .get("/products/:id", getProductById)
  .put("/products/:id", updateProduct)
  .post("/products", createProduct)

  .get("/users/:id", getUserById)
  .post("/users", createUser)
  .put("/users/:id", updateUser)

  .post("/signup", signUpRoute)

  .post("/orders", createOrder)

  .post("/images", imagesRoute());

module.exports = router;
