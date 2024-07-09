const createHttpError = require("http-errors");

const jwt = require("jsonwebtoken");

const UserModel = require("../../module/user/user.model");
const dotenv = require("dotenv");
const AuthorizationMessage = require("../messages/auth.message");

dotenv.config();

const Authorization = async (req, res, next) => {
  try {
    const token = req?.cookies?.access_token;
    if (!token) throw new createHttpError(AuthorizationMessage.Login);
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (typeof data === "object" && "id" in data) {
      const user = await UserModel.findById(data.id, {
        accessToken: 0,
        otp: 0,
      }).lean();
      if (!user)
        throw new createHttpError(AuthorizationMessage.NotFoundAccount);
      req.user = user;

      return next();
    }

    throw new createHttpError.Unauthorized(AuthorizationMessage.InvalidToken);
  } catch (error) {
    next(error);
  }
};

module.exports = Authorization;
