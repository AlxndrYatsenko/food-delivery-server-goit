const Comment = require("../../../models/schemas/сomment");
const { sendCreateSuccess, sendError } = require("../../../servises/send");

const createComment = (req, res) => {
  const comment = req.body;

  const commentData = {
    ...comment
  };

  const newComment = new Comment(commentData);

  return newComment
    .save()
    .then(newComment => sendCreateSuccess(res, newComment, "comment"))
    .catch(error => sendError(res, error));
};

module.exports = createComment;
