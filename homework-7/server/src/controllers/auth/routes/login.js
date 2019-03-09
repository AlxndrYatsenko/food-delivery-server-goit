const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../../models/schemas/user");
const { secretKey } = require("../../../../config");

const errorResp = {
  success: false,
  message: "Authentication failed."
};

const passwMatches = (pass, hash) => {
  return bcrypt.compareSync(pass, hash);
};

const generateToken = paramsForTokenGeneration => {
  return jwt.sign(paramsForTokenGeneration, secretKey, {
    expiresIn: 60 * 60 * 24
  });
};

const login = (req, res) => {
  const { _id: userId, password } = req.body;

  User.findById(userId, onFind);

  function onFind(err, user) {
    if (err) throw err;

    const correctPassword = passwMatches(password, user.password);

    if (!user || !correctPassword) {
      res.json(errorResp);
      return;
    }

    const payload = {
      password: user.password,
      userId
    };

    const token = generateToken(payload);

    res.json({
      success: true,
      message: "Enjoy your token!",
      token
    });
  }
};
module.exports = login;
