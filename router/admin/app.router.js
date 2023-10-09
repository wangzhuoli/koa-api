const KoaRouter = require("koa-router");

const router = new KoaRouter({
  prefix: "/admin",
});

// 用户路由
const userRouter = require("./user.router");
router.use(userRouter.routes());
router.use(userRouter.allowedMethods());

module.exports = router;
