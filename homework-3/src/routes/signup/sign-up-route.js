const { sendCreateSuccess, sendError } = require("../../servises/send");

const signUpRoute = (req, res) => {
  if (req.method === "POST") {
    const newUser = req.body;

    saveUser(newUser)
      .then(newUser => sendCreateSuccess(res, newUser, "user"))
      .catch(error => sendError(res, error));
  }
};

module.exports = signUpRoute;
