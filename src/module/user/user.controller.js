const NodeEnv = require("../../common/constant/env.enum");
const autobind = require("auto-bind");
const userService = require("./user.service");

class UserController {
  #service;

  constructor() {
    autobind(this);
    this.#service = userService;
  }
  async whoami(req, res, next) {
    try {
      const user = req.user;
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
