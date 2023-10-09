const { createUser } = require("../service/user.service");

class UserController {
  async register(ctx, next) {
    const { name, password } = ctx.request.body;
    ctx.body = await createUser({ name, password });
  }
}

module.exports = new UserController();
