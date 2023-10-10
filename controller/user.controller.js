/**
 * 用户控制器
 */
import { createUser } from "#service/user.service.js";

/**
 * 用户注册
 * **/
export const register = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  const result = await createUser({ name, password });
  ctx.body = {
    message: "创建成功",
    data: {
      id: result.id,
      name: result.name,
    },
  };
};
