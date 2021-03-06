const https = require("https");
const options = require("./ssl/options");
const app = require("./models/app");
const router = require("./router");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const logger = morgan("combined");

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use("/", router)
    .use(logger);
  https.createServer(options, app).listen(port, () => {
    console.log("Server is listening on port " + port);
  });
};

module.exports = startServer;
