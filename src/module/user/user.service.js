const autobind = require("auto-bind");
const UserModel = require("./user.model");

class UserService {
  #model;
  constructor() {
    autobind(this);
    this.#model = UserModel;
  }
}

module.exports = new UserService();
