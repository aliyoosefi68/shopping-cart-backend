const cartController = require("./cart.controller");

const router = require("express").Router();

router.get("/", cartController.findAllCarts);
router.post("/:userID/add", cartController.addItemToCart);
router.get("/:userID/all-carts", cartController.findCartsByUserId);
router.put("/:userID/checkout", cartController.chechOutCart);
module.exports = {
  CartRouters: router,
};
