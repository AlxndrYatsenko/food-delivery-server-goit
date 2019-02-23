const router = require("express").Router();
const mainRoute = require("./controllers/main/main");
const { createOrder, getOrderById } = require("./controllers/orders");
const {
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("./controllers/users");
const {
  productsRoute,
  getProductById,
  updateProduct,
  createProduct
} = require("./controllers/products");

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

  .get("/orders/:id", getOrderById)
  .post("/orders", createOrder);

module.exports = router;
