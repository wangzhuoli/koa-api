import { findAll, create } from "#src/service/role.service.js";
import { serverError } from "#src/middleware/error.middleware.js";
import { responseWithoutPagination } from "#src/middleware/response.middleware.js";

// 角色列表
export const roleList = async (ctx) => {
  try {
    responseWithoutPagination(ctx, await findAll(), { message: "查询成功" });
  } catch (e) {
    serverError(ctx, e);
  }
};

// 创建角色
export const createRole = async (ctx) => {
  try {
    responseWithoutPagination(ctx, await create(ctx.request.body), { message: "创建成功" });
  } catch (e) {
    serverError(ctx, e);
  }
};
