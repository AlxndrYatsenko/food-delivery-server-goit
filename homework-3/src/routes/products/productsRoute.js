const fs = require("fs");
const path = require("path");
const url = require("url");
const { getProductsByIds, getProductsByCategory } = require("./helpers");

const { createProduct } = require("./helpers");

const productsRoute = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db/products/",
    "all-products.json"
  );

  if (req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    if (req.url !== "/products") {
      return fs.readFile(filePath, "utf8", (error, data) => {
        if (error) console.log(error);
        const parsedData = JSON.parse(data);

        let responseData;

        const ID = req.url.split("/")[2];
        // get id from url
        const id = ID.includes("?") ? null : ID;

        const { query } = url.parse(req.url, true);

        if (id) {
          responseData = parsedData.filter(p => p.id.toString() === id) || []; // get product by id
        } else if (query) {
          const { ids, category } = query;

          let queryArr = [];

          if (ids) {
            queryArr = ids.split(",").map(i => i.replace(/[^-0-9]/gim, "")); // get ids array from url
            responseData = getProductsByIds(queryArr, parsedData);
          }

          if (category) {
            queryArr = category
              .split(",")
              .map(c => c.replace(/[^-a-z]/gim, "")); // get categories array from url
            responseData = getProductsByCategory(queryArr, parsedData);
          }
        }

        const response = { status: "success", products: responseData };
        res.end(JSON.stringify(response));
      });
    }

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  }

  if (req.method === "POST") {
    const body = req.body;
    const newProduct = createProduct(body);

    res.status(201).json({
      status: "success",
      product: newProduct
    });
  }
};

module.exports = productsRoute;
