const express = require("express");
const bodyParser = require("body-parser");
// const { Router } = require("express");
var app = express();
const morgan = require("morgan");
const logger = morgan("combined");
const mainRoute = require("./routes/main/main");
const productsRoute = require("./routes/products/productsRoute");
const productRoute = require("./routes/products/productRoute");

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .get("/", mainRoute)
    .get("/products", productsRoute)
    .get("/products/:id", productRoute)

    .post("/products", productsRoute)

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
