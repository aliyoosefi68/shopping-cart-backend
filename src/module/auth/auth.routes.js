const Authorization = require("../../common/guard/authorization.guard");
const authController = require("./auth.controller");

const router = require("express").Router();

router.post("/send-otp", authController.sendOtp);
router.post("/check-otp", authController.checkOtp);
router.get("/logout", Authorization, authController.logOut);
module.exports = {
  AuthRouter: router,
};
