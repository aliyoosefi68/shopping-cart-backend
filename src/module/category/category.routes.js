const Authorization = require("../../common/guard/authorization.guard");
const categoryController = require("./category.controller");

const router = require("express").Router();

router.post("/", Authorization, categoryController.create);
router.get("/", categoryController.find);
router.delete("/:id", Authorization, categoryController.remove);

module.exports = {
  CategoryRouters: router,
};
