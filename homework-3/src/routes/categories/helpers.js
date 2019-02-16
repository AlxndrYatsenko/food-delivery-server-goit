const fs = require("fs");
const path = require("path");
const shortid = require("shortid");
const { getAllCategories } = require("../../servises/services");

const createCategory = body => {
  const filePath = path.join(
    __dirname,
    "../../db/categories",
    "all-categories.json"
  );

  const allCategories = getAllCategories();
  const requestCategory = body.categories;
  const isCategoryExist = allCategories.some(
    c => c.categories === requestCategory
  );
  const newCategory = { id: shortid.generate(), ...body };

  const writeCategory = () => {
    const newData = allCategories.concat(newCategory);

    fs.writeFile(filePath, JSON.stringify(newData), function(error) {
      if (error) throw error;
    });
  };

  return isCategoryExist
    ? Promise.reject("This category already exists")
    : Promise.resolve(writeCategory()).then(() => newCategory);
};

module.exports = { createCategory };
