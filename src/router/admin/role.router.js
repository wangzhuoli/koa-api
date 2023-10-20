/**
 * 用户角色路由
 * **/
import KoaRouter from "koa-router";
import { roleList, createRole } from "#src/controller/role.controller.js";
import { createRoleValidator } from "#src/middleware/role.middleware.js";

const router = new KoaRouter({ prefix: "/roles" });

router.get("/", roleList);

router.post("/", createRoleValidator, createRole);

router.delete("/:id", createRoleValidator, createRole);

export default router;
