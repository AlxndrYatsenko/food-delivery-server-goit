const router = require("express").Router();
const { createIngredient } = require("./controllers/ingredients");
const mainRoute = require("./controllers/main/main");
const verifyToken = require("./models/middleware/check-token");

const { createOrder, getOrderById } = require("./controllers/orders");
const { createComment, getCommentById } = require("./controllers/сomments");
const { getUserById, updateUser, deleteUser } = require("./controllers/users");
const { register, logout, login, getCurrent } = require("./controllers/auth");
const {
  productsRoute,
  getProductById,
  updateProduct,
  createProduct,
} = require("./controllers/products");

router
  .get("/", mainRoute)

  .post("/auth/login", login)
  .post("/auth/register", register)
  .use(verifyToken)
  .get("/auth/logout", logout)
  .get("/auth/current", getCurrent)

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
