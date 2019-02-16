const router = require("express").Router();
const mainRoute = require("./main/main");
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
  .get("/users/:id", usersRoute)
  .get("/categories/:id", getCategoryById)

  .post("/signup", signUpRoute)
  .post("/products", productsRoute)
  .post("/users", usersRoute)
  .post("/image", imageRoute())
  .post("/categories", createCategory)

  .put("/products/:id", updateProduct)
  .put("/users/:id", updateUser)
  .put("/categories/:id", updateCategory);

module.exports = router;
