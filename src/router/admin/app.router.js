import KoaRouter from "koa-router";
import { authenticate } from "#src/middleware/auth.middleware.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

export const createRouter = async () => {
  const router = new KoaRouter({
    prefix: "/admin",
  });

  router.use(authenticate);

  const __dirname = dirname(fileURLToPath(import.meta.url));

  // 创建一个数组来保存所有模块的导入 Promise
  const importPromises = [];

  fs.readdirSync(__dirname).forEach((file) => {
    // 排除自己
    if (file !== "app.router.js") {
      const importPromise = import(`${__dirname}/${file}`)
        .then(({ default: _router }) => {
          router.use(_router.routes());
        })
        .catch((error) => {
          console.error(`导入路由文件 ${file} 时发生错误：${error}`);
        });

      importPromises.push(importPromise);
    }
  });

  // 使用 Promise.all 来等待所有模块成功导入
  await Promise.all(importPromises);

  return router;
};
