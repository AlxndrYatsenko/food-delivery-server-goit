const getDate = () => {
  const date = new Date();
  const checkNumber = num => (num < 10 ? "0" + num : num);
  const day = checkNumber(date.getDate());
  const month = checkNumber(date.getMonth() + 1);
  const year = date.getFullYear();

  return day + "-" + month + "-" + year;
};

module.exports = getDate;
