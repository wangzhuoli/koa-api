/**
 * 用户控制器
 */
import { createUser, findUser, findAllWithPagination } from "#service/user.service.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "#config/config.js";
import { serverError } from "#middleware/error.middleware.js";
import { responseWithoutPagination, responseWithPagination } from "#middleware/response.middleware.js";

/**
 * 用户注册
 * **/
export const register = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  try {
    const result = await createUser({ name, password });
    responseWithoutPagination(
      ctx,
      {
        id: result.id,
        name: result.name,
      },
      { message: "创建成功" },
    );
  } catch (error) {
    serverError(ctx, error);
  }
};

/**
 * 用户登录
 * **/
export const login = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  try {
    const result = await findUser({ name, password });
    responseWithoutPagination(
      ctx,
      {
        token: jwt.sign(result, JWT_SECRET_KEY, { expiresIn: "1d" }),
      },
      { message: "登录成功" },
    );
  } catch (error) {
    serverError(ctx, error);
  }
};

/**
 * 用户列表（带分页信息）
 * **/
export const useListWithPagination = async (ctx, next) => {
  const { page, size } = ctx.state.pagination;

  try {
    const { count, data } = await findAllWithPagination({ page, size });
    responseWithPagination(ctx, data, { status: 200, message: "查询成功", count });
  } catch (error) {
    serverError(ctx, error);
  }
};
