/**
 * 服务器入口文件
 * **/
import Koa from "koa";
import { APP_PORT } from "#config/config.js";
import { koaBody } from "koa-body";
import KoaValidate from "koa-validate";
import router from "#router/app.router.js";

const app = new Koa();

// 使用koaBody
app.use(koaBody());

//
KoaValidate(app);

// 后台管理路由
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(APP_PORT, () => {
  console.log(`serve running on http://localhost:${APP_PORT}`);
});
