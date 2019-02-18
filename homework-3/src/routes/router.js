const router = require("express").Router();
const mainRoute = require("./main/main");
const ordersRouter = require("./orders/ordersRouter");
const productsRoute = require("./products/productsRoute");
const imageRoute = require("./image/imageRoute");
const { getProductById, updateProduct } = require("./products/productRoute");
const createCategory = require("./categories/categoriesRouter");
const { usersRoute, updateUser } = require("./users/usersRoute");
const signUpRoute = require("./signup/sign-up-route");
const {
  getCategoryById,
  updateCategory
} = require("./categories/categoryRouter");

router
  .get("/", mainRoute)

  .get("/products", productsRoute)
  .get("/products/:id", getProductById)
  .put("/products/:id", updateProduct)
  .post("/products", productsRoute)

  .get("/users/:id", usersRoute)
  .post("/users", usersRoute)
  .put("/users/:id", updateUser)

  .post("/signup", signUpRoute)

  .post("/orders", ordersRouter)

  .post("/image", imageRoute())

  .get("/categories/:id", getCategoryById)
  .post("/categories", createCategory)
  .put("/categories/:id", updateCategory);

module.exports = router;
