const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const logger = morgan("combined");
const upload = multer({ dest: "uploads/" });
const mainRoute = require("./routes/main/main");
const productsRoute = require("./routes/products/productsRoute");
const imageRoute = require("./routes/image/imageRoute");
const {
  getProductById,
  updateProduct
} = require("./routes/products/productRoute");
// console.log(productRoute);
const { usersRoute, updateUser } = require("./routes/users/usersRoute");

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .get("/", mainRoute)
    .get("/products", productsRoute)
    .get("/products/:id", getProductById)
    .get("/users/:id", usersRoute)

    .post("/products", productsRoute)
    .post("/users", usersRoute)
    .post("/image", imageRoute())

    .put("/products/:id", updateProduct)
    .put("/users/:id", updateUser)

    // .use("/", router)
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
