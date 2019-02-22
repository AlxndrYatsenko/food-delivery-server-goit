const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const userSchema = new Schema({
  productsList: Array,
  deliveryType: String,
  deliveryAdress: String,
  sumToPay: Number,
  status: String
});

userSchema.plugin(timestamp);

const Order = mongoose.model("Order", userSchema);

module.exports = Order;
