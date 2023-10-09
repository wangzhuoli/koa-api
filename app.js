const Koa = require("koa");
const { APP_PORT } = require("./config/config");
const { koaBody } = require("koa-body");

const serve = new Koa();

const adminRouter = require("./router/admin/app.router");

serve.use(koaBody());
serve.use(adminRouter.routes());
serve.use(adminRouter.allowedMethods());

serve.listen(APP_PORT, () => {
  console.log(`serve running on http://localhost:${APP_PORT}`);
});
