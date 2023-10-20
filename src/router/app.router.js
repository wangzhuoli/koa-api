import KoaRouter from "koa-router";
import adminRouter from "#src/router/admin/app.router.js";

const router = new KoaRouter();

router.use(adminRouter.routes());

export default router;
