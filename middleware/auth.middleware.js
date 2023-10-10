/**
 * 用户鉴权中间件
 * **/
import { JWT_SECRET_KEY } from "#config/config.js";
import jwt from "jsonwebtoken";
import { clientError } from "#middleware/error.middleware.js";

// 不需要登录鉴权的路由列表
const whitelist = ["/admin/users/login", "/admin/users/register"];

/**
 * 校验用户是否登录
 * **/
export const authenticate = async (ctx, next) => {
  const { url } = ctx.request;
  if (whitelist.includes(url)) {
    await next();
  } else {
    const { authorization } = ctx.request.header;
    const token = authorization.replace("Bearer ", "");
    try {
      ctx.state.user = jwt.verify(token, JWT_SECRET_KEY);
      await next();
    } catch (error) {
      let message;
      if (!token) {
        message = "请登录";
      } else if (error.name === "TokenExpiredError") {
        message = "登录过期，请重新登录";
      } else {
        message = "无效的登录凭证";
      }
      clientError(ctx, error, { status: 401, message });
    }
  }
};

/**
 * 校验用户是否有对应的权限
 * authorize
 * **/
