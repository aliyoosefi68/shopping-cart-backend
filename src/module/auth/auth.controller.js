const CookieNames = require("../../common/constant/cookie.enum");
const NodeEnv = require("../../common/constant/env.enum");
const { AuthMessage } = require("./auth.messages");
const authService = require("./auth.service");
const autobind = require("auto-bind");

class AuthController {
  #service;
  constructor() {
    autobind(this);
    this.#service = authService;
  }
  async sendOtp(req, res, next) {
    try {
      const { mobile } = req.body;
      const user = await this.#service.sendOtp(mobile);

      return res.json({
        OTPcode: user.otp.code,
        message: AuthMessage.SendOtpSuccessfully,
      });
    } catch (error) {
      next(error);
    }
  }
  async checkOtp(req, res, next) {
    try {
      const { mobile, code } = req.body;
      const token = await this.#service.checkOtp(mobile, code);
      return res
        .cookie(CookieNames.AccessToken, token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === NodeEnv.Production,
        })
        .status(200)
        .json({
          message: AuthMessage.LoginSuccessfully,
        });
    } catch (error) {
      next(error);
    }
  }
  async logOut(req, res, next) {
    try {
      return res.clearCookie(CookieNames.AccessToken).status(200).json({
        message: "logout successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
