const Authorization = require("../../common/guard/authorization.guard");
const userController = require("./user.controller");

const router = require("express").Router();

router.get("/whoami", Authorization, userController.whoami);

module.exports = {
  UserRouter: router,
};
