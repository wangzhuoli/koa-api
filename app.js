const Koa = require("koa");
const { APP_PORT } = require("./config/config");

const serve = new Koa();

const adminRouter = require("./router/admin");

serve.use(adminRouter.routes());

serve.listen(APP_PORT, () => {
  console.log( `serve running on http://localhost:${APP_PORT}`);
});