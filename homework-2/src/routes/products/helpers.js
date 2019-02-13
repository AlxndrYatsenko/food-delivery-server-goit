const getProductsByCategory = (queryArr, parsedData) => {
  const productsArr = [];
  queryArr
    .map(category =>
      parsedData.map(p =>
        p.categories.forEach(e => {
          e === category && !productsArr.includes(p) && productsArr.push(p);
        })
      )
    )
    .map(({ id, sku, name, description }) => {
      return { id, sku, name, description };
    });
  return productsArr;
};

const getProductsById = (queryArr, parsedData) => {
  return queryArr
    .map(id => {
      return parsedData.find(p => id === p.id.toString());
    })
    .map(({ id, sku, name, description }) => {
      return { id, sku, name, description };
    });
};

module.exports = { getProductsByCategory, getProductsById };
