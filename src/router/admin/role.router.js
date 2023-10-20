/**
 * 用户角色路由
 * **/
import KoaRouter from "koa-router";
import { roleList, createRole, updateRole, deleteRole } from "#src/controller/role.controller.js";
import { createRoleValidator, deleteRoleValidator, verifyRoleExist } from "#src/middleware/role.middleware.js";

const router = new KoaRouter({ prefix: "/roles" });

/**
 * 角色列表
 * **/
router.get("/", roleList);

/**
 * 创建角色
 * **/
router.post("/", createRoleValidator, verifyRoleExist, createRole);

/**
 * 更新角色
 * **/
router.put("/:id", createRoleValidator, verifyRoleExist, updateRole);

/**
 * 删除角色
 * **/
router.delete("/:id", deleteRoleValidator, verifyRoleExist, deleteRole);

export default router;
