import KoaRouter from "koa-router";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const router = new KoaRouter();

const __dirname = dirname(fileURLToPath(import.meta.url));

// 读取文件夹下的app.router.js
fs.readdirSync(__dirname).forEach(async (file) => {
  // 判断是否是文件夹
  if (fs.statSync(`${__dirname}/${file}`).isDirectory()) {
    // 读取文件夹下的app.router.js
    const { createRouter } = await import(`${__dirname}/${file}/app.router.js`);
    const appRouter = await createRouter();
    router.use(appRouter.routes());
  }
});

export default router;
