// 创建角色验证
import { clientError } from "#src/middleware/error.middleware.js";

export const createRoleValidator = async (ctx, next) => {
  ctx.checkBody("name").notEmpty("角色名不能为空");
  if (ctx.errors) {
    clientError(ctx, ctx.errors, { message: "角色名不能为空", status: 400 });
    return;
  }
  await next();
};
