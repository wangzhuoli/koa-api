/**
 * 用户管理路由
 * **/
import KoaRouter from "koa-router";
import { register, login } from "#controller/user.controller.js";
import {
  registerValidator,
  verifyUser,
  loginValidator,
  verifyLogin,
} from "#middleware/user.middleware.js";

const router = new KoaRouter({
  prefix: "/users",
});

// 用户注册
router.post("/register", registerValidator, verifyUser, register);

// 用户登录
router.post("/login", loginValidator, verifyLogin, login);

export default router;
