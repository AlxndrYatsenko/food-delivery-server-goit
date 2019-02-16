const fs = require("fs");
const { readFile, writeFile } = require("../../utils/fs");
const { productsPath } = require("../../servises/path");
const { getAllProducts } = require("../../servises/services");

const shortid = require("shortid");

const { getDate, getValues } = require("../../servises/services");

const queryArr = string => string.split(",");

const getProductsByCategory = (categories, parsedData) => {
  const categoriesArr = queryArr(categories);

  const productsArr = [];

  parsedData.map(p =>
    categoriesArr.map(category =>
      p.categories.forEach(e => {
        if (e === category && !productsArr.includes(p)) productsArr.push(p);
      })
    )
  );
  console.log(getValues(productsArr));
  return getValues(productsArr);
};

const getProductsByIds = (ids, parsedData) => {
  const idsArr = queryArr(ids);

  const productsArr = [];
  parsedData.map(p =>
    idsArr.forEach(id => p.id.toString() === id && productsArr.push(p))
  );
  return getValues(productsArr);
};

const createProduct = body => {
  const allProducts = getAllProducts();

  function requestData(reqBody) {
    const getCategoriesArr = () =>
      reqBody.categories.split(",").map(c => c.replace(/[^-a-z]/gim, ""));

    const categoriesField = reqBody.categories
      ? { categories: getCategoriesArr() }
      : null;

    const changedRequestData = {
      ...reqBody,
      ...{ created: getDate() },
      ...categoriesField
    };

    return changedRequestData;
  }

  const newProduct = { id: shortid.generate(), ...requestData(body) };
  console.log(newProduct);
  const newData = allProducts.concat(newProduct);

  return writeFile(productsPath, JSON.stringify(newData)).then(
    () => newProduct
  );
};

module.exports = { getProductsByCategory, getProductsByIds, createProduct };
