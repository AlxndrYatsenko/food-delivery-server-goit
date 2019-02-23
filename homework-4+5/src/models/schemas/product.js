const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const productSchema = new Schema({
  sku: String,
  name: String,
  description: String,
  price: Number,
  currency: String,
  creatorId: String,
	categories: String,
	likes: Number
});

productSchema.plugin(timestamp);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
