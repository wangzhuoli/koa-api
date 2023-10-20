/**
 * 用户管理路由
 * **/
import KoaRouter from "koa-router";
import { register, login, useListWithPagination } from "#src/controller/user.controller.js";
import { registerValidator, verifyUser, loginValidator, verifyLogin, verifyUserNotExist } from "#src/middleware/user.middleware.js";
import { paginateMiddleware } from "#src/middleware/paginate.middleware.js";

const router = new KoaRouter({
  prefix: "/users",
});

// 用户注册
router.post("/register", registerValidator, verifyUser, register);

// 用户登录
router.post("/login", loginValidator, verifyUserNotExist, verifyLogin, login);

// 用户列表
router.get("/", paginateMiddleware, useListWithPagination);

export default router;
