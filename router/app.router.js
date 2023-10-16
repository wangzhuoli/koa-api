import KoaRouter from "koa-router";
import adminRouter from "#router/admin/app.router.js";

const router = new KoaRouter();

router.use(adminRouter.routes());

export default router;
