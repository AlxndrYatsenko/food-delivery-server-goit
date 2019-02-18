const shortid = require("shortid");
const { categoriesPath } = require("../../servises/path");
const { writeFile } = require("../../utils/fs");
const { getAllCategories } = require("../../servises/services");

const createCategory = body => {
  const allCategories = getAllCategories();
  const requestCategory = body.categories;

  const isCategoryExist = allCategories.some(
    c => c.categories === requestCategory
  );

  if (isCategoryExist) return Promise.reject("This category already exists");

  const newCategory = { id: shortid.generate(), ...body };

  const newData = allCategories.concat(newCategory);

  return writeFile(categoriesPath, JSON.stringify(newData)).then(
    () => newCategory
  );
};

module.exports = { createCategory };
