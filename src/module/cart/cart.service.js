const autoBind = require("auto-bind");
const CartModel = require("./cart.model");
const createHttpError = require("http-errors");

class CartService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = CartModel;
  }

  //add item to cart
  async addItemToCart(cartDTO) {
    let cart = await this.#model.findOne({
      user: cartDTO.userID,
      checkOut: false,
    });

    if (!cart) {
      cart = await this.#model.create({ user: cartDTO.userID, items: [] });
    }
    const productIndex = cart.items.findIndex(
      (item) => item.product.toString() === cartDTO.productId
    );

    if (productIndex > -1) {
      cart.items[productIndex].quantity += cartDTO.quantity;
    } else {
      cart.items.push({
        product: cartDTO.productId,
        quantity: cartDTO.quantity,
      });
    }

    await cart.save();
  }

  //get all carts
  async findAllCarts() {
    const carts = await this.#model.find({});
    return carts;
  }

  //get all carts by user id
  async findCartsByUserId(id) {
    const carts = await this.#model.find({ user: id });
    if (!carts)
      throw new createHttpError.NotFound("not exist any cart for this user");

    return carts;
  }

  //checkout cart
  async chechOutCart(userID) {
    const cart = await this.#model.findOne({ user: userID });
    if (!cart) throw new createHttpError.NotFound("cart is not exist");
    cart.checkOut = true;
    cart.save();
  }
}

module.exports = new CartService();
