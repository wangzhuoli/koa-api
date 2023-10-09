const KoaRouter = require("koa-router");
const { register } = require("../../controller/user.controller");

const router = new KoaRouter({
  prefix: "/users",
});

router.post("/register", register);

module.exports = router;
