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

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  if (req.url !== "/products") {
    return fs.readFile(filePath, "utf8", (error, data) => {
      if (error) console.log(error);
      const parsedData = JSON.parse(data);

      let responseData;

      // get id from url
      const id = Number(req.url.split("/")[2]);
      // get query from url
      const { query } = url.parse(req.url, true);
      if (id) {
        // get product by id
        responseData = parsedData.filter(p => p.id === id) || [];
      } else if (query) {
        // get ids array from url

        let queryArr = [];

        if (query.ids) {
          queryArr = query.ids
            .split(",")
            .map(i => Number(i.replace(/[^-0-9]/gim, "")));
        }

        if (query.category) {
          queryArr.push(query.category.replace(/[^-a-z]/gim, ""));
        }

        const filtredProducts = () => {
          const arr = [];

          if (query.category) {
            queryArr.length > 0
              ? queryArr.map(category =>
                  parsedData.map(p =>
                    p.categories.forEach(e =>
                      e === category ? arr.push(p) : null
                    )
                  )
                )
              : [];
          }

          if (query.ids) {
            queryArr.length > 0
              ? queryArr.map(id =>
                  parsedData.map(p => (p.id === id ? arr.push(p) : null))
                )
              : [];
          }

          return arr.length > 0
            ? arr.map(({ id, sku, name, description }) => {
                return { id, sku, name, description };
              })
            : [];
        };
        responseData = filtredProducts();
      }

      const response = { status: "success", products: responseData };
      res.end(JSON.stringify(response));
    });
  }

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
};

module.exports = productsRoute;