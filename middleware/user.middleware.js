/**
 * 用户中间件
 * **/
import { findUser } from "#service/user.service.js";
import { clientError } from "#middleware/error.middleware.js";

/**
 * 用户注册验证器
 * **/
export const registerValidator = async (ctx, next) => {
  ctx.checkBody("name").notEmpty("用户名不能为空");
  ctx.checkBody("password").notEmpty("密码不能为空");
  if (ctx.errors) {
    clientError(ctx, ctx.errors, { message: "用户名或密码不能为空", status: 400 });
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
    clientError(ctx, null, { message: "用户已存在", status: 409 });
    return;
  }
  await next();
};

/**
 * 用户登录验证器
 * **/
export const loginValidator = async (ctx, next) => {
  ctx.checkBody("name").notEmpty("用户名不能为空");
  ctx.checkBody("password").notEmpty("密码不能为空");
  if (ctx.errors) {
    clientError(ctx, ctx.errors, { message: "用户名或密码不能为空", status: 400 });
    return;
  }
  await next();
};

/**
 * 核实登录信息是否正确
 * **/
export const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  const user = await findUser({ name, password });
  if (!user) {
    clientError(ctx, null, { message: "用户名或密码错误", status: 409 });
    return;
  }
  await next();
};
