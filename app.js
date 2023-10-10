/**
 * 服务器入口文件
 * **/
import Koa from "koa";
import { APP_PORT } from "#config/config.js";
import { koaBody } from "koa-body";
import adminRouter from "#router/admin/app.router.js";

const app = new Koa();

// 使用koaBody
app.use(koaBody());

// 后台管理路由
app.use(adminRouter.routes());
app.use(adminRouter.allowedMethods());

app.listen(APP_PORT, () => {
  console.log(`serve running on http://localhost:${APP_PORT}`);
});
