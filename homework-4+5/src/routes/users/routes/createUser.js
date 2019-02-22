const createNewUser = require("./helpers");
const { sendCreateSuccess, sendError } = require("../../../servises/send");

const createUser = (req, res) => {
  if (req.method === "POST") {
    const body = req.body;
    createNewUser(body)
      .then(newUser => sendCreateSuccess(res, newUser, "user"))
      .catch(error => sendError(res, error));
  }
};

module.exports = createUser;
