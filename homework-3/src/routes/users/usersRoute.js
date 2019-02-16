const fs = require("fs");
const { getUser, getAllUsers, createUser, filePath } = require("./helpers");

const usersRoute = (req, res) => {
  if (req.method === "GET") {
    const id = req.params.id;

    const responseData = getUser(id);

    responseData
      ? res.status(200).json({ status: "success", products: responseData })
      : res.status(404).json({ status: "not found" });
  }

  if (req.method === "POST") {
    const body = req.body;
    const newProduct = createUser(body);

    res.status(201).json({
      status: "success",
      product: newProduct
    });
  }
};

const updateUser = (req, res) => {
  const id = req.params.id;

  const prevUser = getUser(id);

  if (!prevUser) return res.status(404).json({ status: "not found" });

  const allUsers = getAllUsers();

  const updatableUser = req.body;

  const updatedUser = { ...prevUser, ...updatableUser };

  const newData = allUsers.map(user =>
    user.id.toString() === id ? { ...updatedUser } : user
  );

  res.status(200).json({ status: "success", user: updatedUser });

  fs.writeFile(filePath, JSON.stringify(newData), function(error) {
    if (error) res.send(error);
  });
};

module.exports = { usersRoute, updateUser };
