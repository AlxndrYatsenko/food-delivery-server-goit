const bcrypt = require("bcrypt");
const User = require("../../../models/modules/db/schemas/user");
const { sendCreateSuccess, sendError } = require("../../../servises/send");

const createUser = (req, res) => {
  const user = req.body;
  const hashedPassword = bcrypt.hashSync(user.password, 10);

  const userData = {
    ...user,
    ...{
      password: hashedPassword
    }
  };

  const newUser = new User(userData);

  return newUser
    .save()
    .then(newUser => sendCreateSuccess(res, newUser, "user"))
    .catch(error => sendError(res, error));
};

module.exports = createUser;
