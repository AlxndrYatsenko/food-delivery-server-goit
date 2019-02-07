const fs = require("fs");
const path = require("path");

const productsRoute = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db/products",
    "/all-products.json"
  );

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(res);
};

module.exports = productsRoute;
