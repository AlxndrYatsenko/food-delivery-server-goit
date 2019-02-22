const mongoose = require("mongoose");

const connectToDB = dbUrl => {
  console.log(dbUrl);
  mongoose
    .connect(dbUrl, { useNewUrlParser: true })
    .then(() => {
      console.log("Database connection successful");
    })
    .catch(err => {
      console.error("Database connection error", err);
    });
};

module.exports = connectToDB;
