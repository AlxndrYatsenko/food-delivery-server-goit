const { getUser, createUser } = require("./helpers");

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
module.exports = usersRoute;
