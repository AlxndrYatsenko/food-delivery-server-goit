const register = require("./routes/register");
const logout = require("./routes/logout");
const login = require("./routes/login");
const getCurrent = require("./routes/get-сurrent");

module.exports = {
  login,
  getCurrent,
  register,
  logout
};
