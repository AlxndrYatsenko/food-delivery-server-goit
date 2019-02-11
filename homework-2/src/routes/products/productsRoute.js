const fs = require("fs");
const url = require("url");
const path = require("path");

const productsRoute = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db/products",
    "/all-products.json"
  );

  const { query } = url.parse(req.url, true);
  const id = Number(req.url.split("/")[2]);

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  if (id) {
    return fs.readFile(filePath, "utf8", function(error, data) {
      if (error) console.log(error);
      const parsedData = JSON.parse(data);
      productById = parsedData.find(p => p.id === id);
      const response = { status: "success", products: [productById] };
      res.end(JSON.stringify(response));
    });
  }

  if (query.ids) {
    const ids = query.ids
      .split(",")
      .map(i => Number(i.replace(/[^-0-9]/gim, "")));

    return fs.readFile(filePath, "utf8", function(error, data) {
      if (error) console.log(error);
      const parsedData = JSON.parse(data);

      const filtredProducts = () =>
        ids
          .map(id => parsedData.find(p => p.id === id))
          .map(({ id, sku, name, description }) => {
            return { id, sku, name, description };
          });
      const response = { status: "success", products: filtredProducts() };
      res.end(JSON.stringify(response));
    });
  }

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(res);
};

module.exports = productsRoute;
