const { sendSuccess, sendNotFound } = require("../../servises/send");
const { writeFile } = require("../../utils/fs");
const { categoriesPath } = require("../../servises/path");

const { getAllCategories } = require("../../servises/services");

const getCategoryById = (req, res) => {
  const id = req.params.id;

  const allCategories = getAllCategories();
  const response = allCategories.find(c => c.id.toString() === id);

  response ? sendSuccess(res, response) : sendNotFound(res);
};

const updateCategory = (req, res) => {
  const id = req.params.id;

  const allCategories = getAllCategories();

  const oldCategory = allCategories.find(c => c.id.toString() === id);

  if (!oldCategory) return sendNotFound(res);

  const newCategory = req.body;

  const updatedCategory = { ...oldCategory, ...newCategory };

  const newData = allCategories.map(c =>
    c.id.toString() === id ? { ...updatedCategory } : c
  );

  writeFile(categoriesPath, JSON.stringify(newData))
    .then(sendSuccess(res, updatedCategory))
    .catch(error => res.send(error));
};

module.exports = { getCategoryById, updateCategory };
