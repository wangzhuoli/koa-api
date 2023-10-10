import { getUser } from "#service/user.service.js";

export const userValidator = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    ctx.status = 400;
    ctx.body = {
      message: "用户名或密码不能为空",
      data: null,
    };
    return;
  }
  await next();
};

export const verifyUser = async (ctx, next) => {
  const { name } = ctx.request.body;
  const user = await getUser({ name });
  if (user) {
    ctx.status = 409;
    ctx.body = {
      message: "用户名已存在",
      data: null,
    };
    return;
  }
  await next();
};
