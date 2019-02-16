const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const logger = morgan("combined");
const mainRoute = require("./routes/main/main");
const productsRoute = require("./routes/products/productsRoute");
const imageRoute = require("./routes/image/imageRoute");
const {
  getProductById,
  updateProduct
} = require("./routes/products/productRoute");

const createCategory = require("./routes/categories/categoriesRouter");

const {
  getCategoryById,
  updateCategory
} = require("./routes/categories/categoryRouter");
const { usersRoute, updateUser } = require("./routes/users/usersRoute");

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .get("/", mainRoute)
    .get("/products", productsRoute)
    .get("/products/:id", getProductById)
    .get("/users/:id", usersRoute)
    .get("/categories/:id", getCategoryById)

    .post("/products", productsRoute)
    .post("/users", usersRoute)
    .post("/image", imageRoute())
    .post("/categories", createCategory)

    .put("/products/:id", updateProduct)
    .put("/users/:id", updateUser)
    .put("/categories/:id", updateCategory)

    .use(logger)
    .listen(port, () => {
      console.log("Server is listening on port " + port);
    });
};

// const https = require("https");
// const url = require("url");

// const options = require("./ssl/options");

// const startServer = port => {
//   const server = https.createServer(options, (req, res) => {
//     const parsedUrl = url.parse(req.url);
//     const pathName = "/" + parsedUrl.pathname.split("/")[1] || "/";
//     const func = router[pathName] || router.default;
//     logger(req, res, () => func(req, res));
//   });
//   server.listen(port);
// };

module.exports = startServer;
