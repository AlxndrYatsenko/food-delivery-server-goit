const fs = require("fs");
const path = require("path");
const url = require("url");

const productRoute = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db/products",
    "/all-products.json"
  );
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  // const id = url.parse(url);
  console.log(query);

  // var fs = require("fs");

  // Asynchronous read

  // let allProducts = [];
  let productById = {};
  fs.readFile(filePath, function(err, data) {
    if (err) {
      return console.error(err);
    }
    const parsedProducts = JSON.parse(data);
    productById = parsedProducts.find(p => p.id === 19112837);
    // console.log(productById);
    // console.log("Asynchronous read: " + data.toString());
  });

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  const readStream = fs.createReadStream(filePath);

  // console.log(readStream);
  readStream.pipe(res);
};

module.exports = productRoute;
