const mongoose = require("mongoose");
const { Schema } = mongoose;
const { timeStamp } = require("../middleware");

const ingredientSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  },
);

ingredientSchema.plugin(timeStamp);

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
