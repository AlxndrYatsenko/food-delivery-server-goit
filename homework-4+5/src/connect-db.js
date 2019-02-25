const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const connectToDB = dbUrl => {
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
