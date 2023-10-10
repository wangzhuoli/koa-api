/**
 * 用户中间件
 * **/
import { findUser } from "#service/user.service.js";

/**
 * 注册验证器
 * **/
export const registerValidator = async (ctx, next) => {
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

/**
 * 核实用户是否存在
 * **/
export const verifyUser = async (ctx, next) => {
  const { name } = ctx.request.body;
  const user = await findUser({ name });
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
