const Koa = require("koa");

const serve = new Koa();

serve.use(async (ctx, next) => {
  ctx.body = "hello world";
});

serve.listen(8080, () => {
  console.log("serve running on http://localhost:8080");
});