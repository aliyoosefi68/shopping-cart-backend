const Authorization = require("./common/guard/authorization.guard");
const { AuthRouter } = require("./module/auth/auth.routes");
const { CartRouters } = require("./module/cart/cart.routes");
const { CategoryRouters } = require("./module/category/category.routes");
const { ProductRouters } = require("./module/product/product.routes");
const { UserRouter } = require("./module/user/user.routes");

const mainRouter = require("express").Router();

mainRouter.use("/auth", AuthRouter);
mainRouter.use("/user", UserRouter);
mainRouter.use("/category", CategoryRouters);
mainRouter.use("/product", ProductRouters);
mainRouter.use("/cart", Authorization, CartRouters);

module.exports = mainRouter;
