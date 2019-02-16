const { createCategory } = require("./helpers");

const categoryRoute = (req, res) => {
  if (req.method === "POST") {
    const body = req.body;
    const newCategory = createCategory(body);

    res.status(201).json({
      status: "success",
      category: newCategory
    });
  }
};
module.exports = categoryRoute;
