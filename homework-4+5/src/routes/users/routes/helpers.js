const bcrypt = require("bcrypt");
const User = require("../../../models/modules/db/schemas/user");

const createNewUser = user => {
  const hashedPassword = bcrypt.hashSync(user.password, 10);

  const userData = {
    ...user,
    ...{
      password: hashedPassword
    }
  };

  const newUser = new User(userData);

  return newUser.save();
};
module.exports = createNewUser;
