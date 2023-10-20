/**
 * Admin路由入口文件
 * **/
import KoaRouter from "koa-router";
import userRouter from "./user.router.js";
import { authenticate } from "#src/middleware/auth.middleware.js";

const router = new KoaRouter({
  prefix: "/admin",
});

router.use(authenticate);

// 用户路由
router.use(userRouter.routes());

export default router;
