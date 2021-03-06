const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const productSchema = new Schema(
  {
    sku: String,
    name: String,
    description: String,
    price: Number,
    currency: String,
    creatorId: String,
    categories: Array,
    likes: Number
  },
  {
    timestamps: true
  }
);

productSchema.plugin(timestamp);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
