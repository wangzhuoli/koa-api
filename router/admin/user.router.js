import KoaRouter from "koa-router";
import { register } from "#controller/user.controller.js";
import { userValidator, verifyUser } from "#middleware/user.middleware.js";

const router = new KoaRouter({
  prefix: "/users",
});

router.post("/register", userValidator, verifyUser, register);

export default router;
