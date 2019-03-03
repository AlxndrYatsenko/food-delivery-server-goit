const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const orderSchema = new Schema(
  {
    productsList: Array,
    deliveryType: String,
    deliveryAdress: String,
    sumToPay: Number,
    status: String
  },
  {
    timestamps: true
  }
);

orderSchema.plugin(timestamp);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
