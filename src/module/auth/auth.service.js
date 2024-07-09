const UserModel = require("../user/user.model");
const createHttpError = require("http-errors");
const { AuthMessage } = require("./auth.messages");
const { randomInt } = require("crypto");
const jwt = require("jsonwebtoken");
const autobind = require("auto-bind");
const dotenv = require("dotenv");
dotenv.config();

class AuthService {
  #model;
  constructor() {
    autobind(this);
    this.#model = UserModel;
  }
  async sendOtp(mobile) {
    const user = await this.#model.findOne({ mobile });
    const now = new Date().getTime();
    const otp = {
      code: randomInt(10000, 99999),
      expiresIn: now + 1000 * 60 * 2,
    };
    if (!user) {
      const newUser = await this.#model.create({
        mobile,
        otp,
      });

      return newUser;
    }

    if (user.otp && user.otp.expiresIn > now) {
      throw new createHttpError.BadRequest(AuthMessage.otpCodeNotExpired);
    }

    user.otp = otp;
    user.save();

    return user;
  }
  async checkOtp(mobile, code) {
    const user = await this.checkExistByMobile(mobile);
    const now = new Date().getTime();
    if (user?.otp?.expiresIn < now)
      throw new createHttpError.Unauthorized(AuthMessage.otpCodeExpired);

    if (user?.otp?.code !== code)
      throw new createHttpError.Unauthorized(AuthMessage.otpCodeIncorrect);

    if (!user.verifyMobile) {
      user.verifyMobile = true;
    }
    const accessToken = this.signToken({ mobile, id: user._id });

    user.accessToken = accessToken;
    await user.save();
    return accessToken;
  }

  async checkExistByMobile(mobile) {
    const user = await this.#model.findOne({ mobile });
    if (!user) throw new createHttpError.NotFound(AuthMessage.NotFoundUser);
    return user;
  }

  signToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1y" });
  }
}

module.exports = new AuthService();
