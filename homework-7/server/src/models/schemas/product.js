const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/time-stamp");

const productSchema = new Schema(
  {
    sku: String,
    name: String,
    description: String,
    price: Number,
    currency: String,
    creatorId: String,
    categories: Array,
    likes: Number,
    ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
  },
  {
    timestamps: true,
  },
);

productSchema.plugin(timestamp);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
