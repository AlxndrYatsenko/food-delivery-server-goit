// const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
// const http = require("http");
const https = require("https");
const url = require("url");

const morgan = require("morgan");
const router = require("./routes/router");

const logger = morgan("combined");

const options = {
  key: fs.readFileSync(path.join(__dirname, "./ssl/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "./ssl/server.crt"))
};

const startServer = port => {
  const server = https.createServer(options, (req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathName = "/" + parsedUrl.pathname.split("/")[1] || "/";
    const func = router[pathName] || router.default;
    logger(req, res, () => func(req, res));
  });
  server.listen(port);
};

module.exports = startServer;
