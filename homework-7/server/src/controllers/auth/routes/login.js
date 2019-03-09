const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../../models/schemas/user");
const { secretKey } = require("../../../../config");

const errorResp = {
  success: false,
  message: "Authentication failed.",
};

const sendToken = (res, token) =>
  res.json({
    success: true,
    message: "Enjoy your token!",
    token,
  });

const generateToken = paramsForTokenGeneration => {
  return jwt.sign(paramsForTokenGeneration, secretKey, {
    expiresIn: 60 * 60 * 24,
  });
};

const onFind = (res, user, password) => {
  const correctPassword = bcrypt.compareSync(password, user.password);
  if (!user || !correctPassword) {
    res.json(errorResp);
    return;
  }

  const payload = {
    password: user.password,
    userId: user._id,
  };

  const token = generateToken(payload);
  return token;
};

const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then(user => {
      if (!user) return res.json(errorResp);
      return onFind(res, user, password);
    })
    .then(token => {
      if (!token) return res.json(errorResp);
      sendToken(res, token);
    })
    .catch(err => {
      throw err;
    });
};

module.exports = login;
