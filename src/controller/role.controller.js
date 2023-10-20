import { findAll, create, update, remove } from "#src/service/role.service.js";
import { serverError } from "#src/middleware/error.middleware.js";
import { responseWithoutPagination } from "#src/middleware/response.middleware.js";

/**
 * 角色列表
 * **/
export const roleList = async (ctx) => {
  try {
    responseWithoutPagination(ctx, await findAll(), { message: "查询成功" });
  } catch (e) {
    serverError(ctx, e);
  }
};

/**
 * 创建角色
 * **/
export const createRole = async (ctx) => {
  try {
    responseWithoutPagination(ctx, await create(ctx.request.body), { message: "创建成功" });
  } catch (e) {
    serverError(ctx, e);
  }
};

/**
 * 更新角色
 * **/
export const updateRole = async (ctx) => {
  try {
    const { name } = ctx.request.body;
    const id = ctx.params.id;
    responseWithoutPagination(ctx, await update({ name, id }), { message: "更新成功" });
  } catch (e) {
    serverError(ctx, e);
  }
};

/**
 * 删除角色
 * **/
export const deleteRole = async (ctx) => {
  try {
    const { id } = ctx.params;
    responseWithoutPagination(ctx, await remove({ id }), { message: "删除成功" });
  } catch (e) {
    serverError(ctx, e);
  }
};
