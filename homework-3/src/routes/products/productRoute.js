const fs = require("fs");
const path = require("path");

const productRouter = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db/products/",
    "all-products.json"
  );
  const id = req.params.id;

  fs.readFile(filePath, "utf8", (error, data) => {
    if (error) console.log(error);

    const parsedData = JSON.parse(data);
    const responseData = parsedData.find(p => p.id.toString() === id);

    const response = { status: "success", products: responseData };
    res.end(JSON.stringify(response));
  });

  res.writeHead(200, {
    "Content-Type": "application/json"
  });
};
module.exports = productRouter;
