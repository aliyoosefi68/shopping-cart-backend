const autoBind = require("auto-bind");
const cartService = require("./cart.service");

class CartController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = cartService;
  }

  //add item to cart
  async addItemToCart(req, res, next) {
    try {
      const { userID } = req.params;
      const { productId, quantity } = req.body;
      const result = await this.#service.addItemToCart({
        userID,
        productId,
        quantity,
      });
      return res.json({
        message: "product add successfully",
      });
    } catch (error) {
      next(error);
    }
  }

  //get all carts
  async findAllCarts(req, res, next) {
    try {
      const carts = await this.#service.findAllCarts();
      return res.json({
        carts,
      });
    } catch (error) {
      next(error);
    }
  }

  //get all carts by userid
  async findCartsByUserId(req, res, next) {
    try {
      const { userID } = req.params;
      const carts = await this.#service.findCartsByUserId(userID);

      return res.json({ carts });
    } catch (error) {
      next(error);
    }
  }

  //checkout cart
  async chechOutCart(req, res, next) {
    try {
      const { userID } = req.params;
      await this.#service.chechOutCart(userID);

      return res.json({
        message: "payment is successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartController();
