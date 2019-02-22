const sendCreateSuccess = (res, data, field) => {
  const obj = { status: "success" };
  const key = field;
  obj[key] = data;
  return res.status(201).json(obj);
};

const sendSuccess = (res, data, field) => {
  const obj = { status: "success" };
  const key = field;
  obj[key] = data;
  return res.status(200).json(obj);
};

const sendNotFound = res => res.status(404).json({ status: "Not Found" });

const sendFaild = res =>
  res.status(501).send({ status: "failed", order: null });

const sendError = (res, error) =>
  res.status(409).json({
    status: error
  });

module.exports = {
  sendCreateSuccess,
  sendSuccess,
  sendNotFound,
  sendFaild,
  sendError
};
