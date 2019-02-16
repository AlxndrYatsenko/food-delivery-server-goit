const fs = require("fs");
const path = require("path");
// const getDate = require("../../servises/services");

const filePath = path.join(
  __dirname,
  "../../",
  "db/categories/",
  "all-categories.json"
);

const getCategoryById = (req, res) => {
  const id = req.params.id;

  const data = fs.readFileSync(filePath, "utf8");
  const parsedData = JSON.parse(data);
  const response = parsedData.find(c => c.id.toString() === id);

  response
    ? res.status(200).json({ status: "success", category: response })
    : res.status(404).json({ status: "not found" });
};

const updateCategory = (req, res) => {
  const id = req.params.id;

  const data = fs.readFileSync(filePath, "utf8");

  const parsedData = JSON.parse(data);
  const oldCategory = parsedData.find(c => c.id.toString() === id);

  if (!oldCategory) return res.status(404).json({ status: "not found" });

  const parsedDataWithOutOld = parsedData.filter(c => c.id.toString() !== id);

  const newCategory = req.body;

  const updatedCategory = { ...oldCategory, ...newCategory };

  const newData = parsedDataWithOutOld.concat(updatedCategory);

  res.status(200).json({ status: "success", category: updatedCategory });

  fs.writeFile(filePath, JSON.stringify(newData), function(error) {
    if (error) res.send(error);
  });
};
module.exports = { getCategoryById, updateCategory };
