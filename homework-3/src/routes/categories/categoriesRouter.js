const { createCategory } = require("./helpers");

const categoryRoute = (req, res) => {
  if (req.method === "POST") {
    const body = req.body;

    const sendNewCategory = data =>
      res.status(201).json({
        status: "success",
        category: data
      });

    const sendError = error =>
      res.status(409).json({
        status: error
      });

    createCategory(body)
      .then(newCategory => sendNewCategory(newCategory))
      .catch(error => sendError(error));
  }
};
module.exports = categoryRoute;
