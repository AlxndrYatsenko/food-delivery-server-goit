const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/time-stamp");

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    phone: String,
    nickName: String,
    location: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    favoriteProducts: Array,
    viewedProducts: Array,
    orders: Array,
  },
  {
    timestamps: true,
  },
);

userSchema.plugin(timestamp);

const User = mongoose.model("User", userSchema);

module.exports = User;
