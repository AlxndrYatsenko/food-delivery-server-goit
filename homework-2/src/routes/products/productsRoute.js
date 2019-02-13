const fs = require("fs");
const url = require("url");
const path = require("path");
const { getProductsByCategory, getProductsById } = require("./helpers.js");

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

  if (req.url !== "/products") {
    return fs.readFile(filePath, "utf8", (error, data) => {
      if (error) console.log(error);
      const parsedData = JSON.parse(data);

      let responseData;

      // get id from url
      const id = req.url.split("/")[2].includes("?")
        ? null
        : req.url.split("/")[2];

      // get query from url
      const { query } = url.parse(req.url, true);

      if (id) {
        // get product by id
        responseData = parsedData.filter(p => p.id.toString() === id) || [];
      } else if (query) {
        const { ids, category } = query;

        let queryArr = [];

        // get ids array from url
        if (ids) {
          queryArr = ids.split(",").map(i => i.replace(/[^-0-9]/gim, ""));
          responseData = getProductsById(queryArr, parsedData);
        }

        // get categories array from url
        if (category) {
          queryArr = category.split(",").map(c => c.replace(/[^-a-z]/gim, ""));
          responseData = getProductsByCategory(queryArr, parsedData);
        }
      }

      const response = { status: "success", products: responseData };
      res.end(JSON.stringify(response));
    });
  }

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
};

module.exports = productsRoute;
