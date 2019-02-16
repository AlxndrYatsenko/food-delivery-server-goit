const fs = require("fs");
const path = require("path");

const { getAllCategories } = require("../../servises/services");

const filePath = path.join(
  __dirname,
  "../../",
  "db/categories/",
  "all-categories.json"
);

const getCategoryById = (req, res) => {
  const id = req.params.id;

  const allCategories = getAllCategories();
  const response = allCategories.find(c => c.id.toString() === id);

  response
    ? res.status(200).json({ status: "success", category: response })
    : res.status(404).json({ status: "not found" });
};

const updateCategory = (req, res) => {
  const id = req.params.id;

  const allCategories = getAllCategories();

  const oldCategory = allCategories.find(c => c.id.toString() === id);

  if (!oldCategory) return res.status(404).json({ status: "not found" });

  const allCategoriesWithOutOld = allCategories.filter(
    c => c.id.toString() !== id
  );

  const newCategory = req.body;

  const updatedCategory = { ...oldCategory, ...newCategory };

  const newData = allCategoriesWithOutOld.concat(updatedCategory);

  const sendUpdatedCategory = () =>
    res.status(200).json({ status: "success", category: updatedCategory });

  Promise.resolve(
    fs.writeFile(filePath, JSON.stringify(newData), error => {
      if (error) res.send(error);
    })
  )
    .then(sendUpdatedCategory())
    .catch(error => res.send(error));
};

module.exports = { getCategoryById, updateCategory };
