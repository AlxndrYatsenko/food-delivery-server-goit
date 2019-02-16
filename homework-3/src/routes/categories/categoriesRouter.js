const { sendCreateSuccess, sendError } = require("../../servises/send");
const { createCategory } = require("./helpers");

const categoryRoute = (req, res) => {
  if (req.method === "POST") {
    const body = req.body;

    createCategory(body)
      .then(newCategory => sendCreateSuccess(res, newCategory, "category"))
      .catch(error => sendError(res, error));
  }
};
module.exports = categoryRoute;
