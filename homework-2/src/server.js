const https = require("https");
const url = require("url");

const morgan = require("morgan");
const router = require("./routes/router");
const options = require("./ssl/options");

const logger = morgan("combined");

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
