import { clientError } from "#src/middleware/error.middleware.js";
import { findRole } from "#src/service/role.service.js";

/**
 * 创建角色，参数验证
 * **/
export const createRoleValidator = async (ctx, next) => {
  ctx.checkBody("name").notEmpty("角色名不能为空");
  if (ctx.errors) {
    clientError(ctx, ctx.errors, { message: "角色名不能为空", status: 400 });
    return;
  }
  await next();
};
/**
 * 验证角色是否存在
 * @param {Object} ctx - Koa context
 * @param {Function} next - Koa next function
 */
export const verifyRoleExist = async (ctx, next) => {
  const { name } = ctx.request.body;
  const { id } = ctx.params;

  // 使用一个通用的查询函数来查找角色
  const role = await findRole(id ? { id } : { name });

  // 根据情况返回不同的错误消息
  if (!role && id) {
    clientError(ctx, null, { message: "角色不存在", status: 404 });
  } else if (role && !id) {
    clientError(ctx, null, { message: "角色已存在", status: 409 });
  } else {
    // 如果角色存在，或者角色不存在但是是更新操作，继续下一个中间件
    await next();
  }
};

/**
 * 删除角色验证器
 * **/
export const deleteRoleValidator = async (ctx, next) => {
  ctx.checkParams("id").notEmpty("角色ID不能为空");
  if (ctx.errors) {
    clientError(ctx, ctx.errors, { message: "角色ID不能为空", status: 400 });
    return;
  }
  await next();
};
