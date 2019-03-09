// const { URL } = require("url");
const Comment = require("../../../models/schemas/сomment");
const { sendSuccess, sendError } = require("../../../servises/send");

const getIdFromQuery = str => str.replace(/'|"|\s/g, "");

const getCommentById = (req, res) => {
  const { productId } = req.query;
  const id = getIdFromQuery(productId);

  Comment.find({ product: id })
    .then(comment => {
      return comment
        ? sendSuccess(res, comment, "comments")
        : sendSuccess(res, [], "comments");
    })
    .catch(error => sendError(res, error));
};

module.exports = getCommentById;
