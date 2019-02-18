const { writeFile } = require("../../utils/fs");
const { productsPath } = require("../../servises/path");
const { getAllProducts } = require("../../servises/services");

const shortid = require("shortid");

const { getDate, getValues } = require("../../servises/services");

const queryArr = string => string.split(",");

const getProductsByCategory = (categories, allProducts) => {
  const productsArr = allProducts.filter(p =>
    p.categories.find(c => categories.includes(c))
  );
  return getValues(productsArr);
};

const getProductsByIds = (ids, allProducts) => {
  const idsArr = queryArr(ids);

  const productsArr = allProducts.filter(p =>
    idsArr.find(id => p.id.toString() === id)
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
