const Authorization = require("../../common/guard/authorization.guard");
const { upload } = require("../../common/utils/multer");
const productController = require("./product.controller");

const router = require("express").Router();

router.post(
  "/",
  Authorization,
  upload.single("image"),
  productController.create
);
router.get("/", productController.find);
router.get("/:id", productController.findById);
router.delete("/:id", Authorization, productController.remove);

module.exports = {
  ProductRouters: router,
};
