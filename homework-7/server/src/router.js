const router = require("express").Router();
const { createIngredient } = require("./controllers/ingredients");
const mainRoute = require("./controllers/main/main");

const { createOrder, getOrderById } = require("./controllers/orders");
const { createComment, getCommentById } = require("./controllers/сomments");
const { getUserById, updateUser, deleteUser } = require("./controllers/users");
const { register, logout, login, getCurrent } = require("./controllers/auth");
const {
  productsRoute,
  getProductById,
  updateProduct,
  createProduct
} = require("./controllers/products");

router
  .get("/", mainRoute)

  .get("/auth/logout", logout)
  .post("/auth/login", login)
  .post("/auth/current", getCurrent)
  .post("/auth/register", register)
  // .post("/users", createUser)

  .post("/ingredients", createIngredient)

  .get("/comments", getCommentById)
  .post("/comments", createComment)

  .get("/products", productsRoute)
  .get("/products/:id", getProductById)
  .put("/products/:id", updateProduct)
  .post("/products", createProduct)

  .get("/users", getUserById)
  .get("/users/:id", getUserById)
  .put("/users/:id", updateUser)
  .delete("/users/:id", deleteUser)

  .get("/orders/:id", getOrderById)
  .post("/orders", createOrder);

module.exports = router;
