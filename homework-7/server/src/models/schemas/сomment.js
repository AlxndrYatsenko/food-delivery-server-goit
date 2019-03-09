const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/time-stamp");

const сommentSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    text: String,
    mark: { type: Schema.Types.Number, default: 1, required: true },
  },
  {
    timestamps: true,
  },
);

сommentSchema.plugin(timestamp);

const Comment = mongoose.model("Comment", сommentSchema);

module.exports = Comment;
