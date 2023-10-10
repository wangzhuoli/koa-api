/**
 * Admin路由入口文件
 * **/
import KoaRouter from "koa-router";
import userRouter from "./user.router.js";
import { authority } from "#middleware/authority.middleware.js";

const router = new KoaRouter({
  prefix: "/admin",
});

router.use(authority);

// 用户路由
router.use(userRouter.routes());
router.use(userRouter.allowedMethods());

export default router;
