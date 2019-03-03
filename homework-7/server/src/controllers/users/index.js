const getUserById = require("./routes/get-user");
const createUser = require("./routes/create-user");
const updateUser = require("./routes/update-user");
const deleteUser = require("./routes/delete-user");

module.exports = { getUserById, createUser, updateUser, deleteUser };
