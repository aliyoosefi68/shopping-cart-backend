const { Schema, Types, model } = require("mongoose");

const CartSchema = new Schema({
  user: { type: Types.ObjectId, ref: "user", required: true },
  items: [
    {
      product: { type: Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
  checkOut: { type: Boolean, default: false },
  totalPrice: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

CartSchema.pre("save", async function (next) {
  const cart = this;
  let total = 0;

  for (const item of cart.items) {
    const product = await model("Product").findById(item.product);
    total += product.price * item.quantity;
  }
  cart.totalPrice = total;
  next();
});

const CartModel = model("Cart", CartSchema);
module.exports = CartModel;
