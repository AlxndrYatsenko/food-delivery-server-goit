const router = require("express").Router();
const mainRoute = require("./main/main");
const { createOrder, getOrderById } = require("./orders");
const { getUserById, createUser, updateUser, deleteUser } = require("./users");
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
  .delete("/users/:id", deleteUser)

  .post("/signup", signUpRoute)

  .get("/orders/:id", getOrderById)
  .post("/orders", createOrder)

  .post("/images", imagesRoute());

module.exports = router;
