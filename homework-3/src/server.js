const express = require("express");
const app = express();
const router = require("./routes/router");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const logger = morgan("combined");

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use("/", router)
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
