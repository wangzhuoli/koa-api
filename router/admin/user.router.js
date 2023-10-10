/**
 * 用户管理路由
 * **/
import KoaRouter from "koa-router";
import { register } from "#controller/user.controller.js";
import { registerValidator, verifyUser } from "#middleware/user.middleware.js";

const router = new KoaRouter({
  prefix: "/users",
});

router.post("/register", registerValidator, verifyUser, register);

export default router;
