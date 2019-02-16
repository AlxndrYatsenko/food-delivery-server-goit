const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const getDate = require("../../servises/services");

const getValues = arr =>
  arr.map(({ id, sku, name, description }) => {
    return { id, sku, name, description };
  });

const getProductsByCategory = (queryArr, parsedData) => {
  const productsArr = [];
  queryArr.map(category =>
    parsedData.map(p =>
      p.categories.forEach(e => {
        if (e === category && !productsArr.includes(p)) productsArr.push(p);
      })
    )
  );
  return getValues(productsArr);
};

const getProductsByIds = (queryArr, parsedData) => {
  const productsArr = [];
  parsedData.map(p =>
    queryArr.forEach(id => p.id.toString() === id && productsArr.push(p))
  );
  return getValues(productsArr);
};

const createProduct = body => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db/products",
    "/all-products.json"
  );

  const allProducts = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(allProducts);

  const requestData = ({ categories }) => {
    const categoriesArr = categories
      .split(",")
      .map(c => c.replace(/[^-a-z]/gim, ""));

    const changedRequestData = {
      ...body,
      ...{
        created: getDate(),
        categories: categoriesArr
      }
    };

    return changedRequestData;
  };

  const newProduct = [{ id: shortid.generate(), ...requestData(body) }];

  const newData = parsedData.concat(newProduct);

  fs.writeFile(filePath, JSON.stringify(newData), function(error) {
    if (error) throw error;
  });
  return newProduct;
};

module.exports = { getProductsByCategory, getProductsByIds, createProduct };
