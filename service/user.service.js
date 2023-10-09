const User = require("../model/user.model");

class UserService {
  async createUser(params) {
    const { name, password } = params;
    const result = await User.create({ name, password });
    return result.dataValues;
  }
}

module.exports = new UserService();
