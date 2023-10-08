const KoaRouter = require("koa-router");

const router = new KoaRouter({
  prefix: "/admin"
});

router.get("/", (ctx, next) => {
  ctx.body = "hello admin router";
});

module.exports = router;

