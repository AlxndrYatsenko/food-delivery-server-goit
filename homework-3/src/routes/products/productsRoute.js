// const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const productsRoute = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db/products",
    "/all-products.json"
  );
  // console.log(req.method);
  if (req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  }

  if (req.method === "POST") {
    const data = fs.readFileSync(filePath, "utf8");
    const parsedData = JSON.parse(data);

    const requestData = req.body;
    const newProduct = [{ id: shortid.generate(), ...requestData }];

    const newData = parsedData.concat(newProduct);
    console.log(newData);
    fs.writeFile(filePath, JSON.stringify(newData), function(error) {
      if (error) throw error; // если возникла ошибка
    });

    res.json({
      status: "success",
      product: newProduct
    });
  }
};

module.exports = productsRoute;
