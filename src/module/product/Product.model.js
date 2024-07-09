const { Schema, Types, model } = require("mongoose");

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  slug: { type: String, required: true },
  category: { type: Types.ObjectId, ref: "Category", required: true },
  image: { type: String, required: false },
});

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;
