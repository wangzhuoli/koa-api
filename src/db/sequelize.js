/**
 * 数据库连接配置文件
 *
 * 本文件负责创建和配置 Sequelize 实例，用于连接到 MySQL 数据库。
 * 这个文件的主要作用是建立和管理数据库连接，以便在整个应用程序中执行数据库操作。
 */

import { Sequelize } from "sequelize";
import { MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_PORT, DB_NAME } from "#src/config/config.js";
import { formatDateFiled } from "#src/hooks/formatDateFiled.hooks.js";

const sequelize = new Sequelize(DB_NAME, MYSQL_USERNAME, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: "mysql",
  port: MYSQL_PORT,
  timezone: "+08:00", // 设置时区，例如 '+08:00' 表示东八区
  define: {
    underscored: true, // 设置全局的 underscored 为 true
    hooks: {
      // 添加全局的 afterFind 钩子
      afterFind(results) {
        formatDateFiled(results);
      },
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((error) => {
    console.log(error);
    console.log("数据库连接失败");
  });

export default sequelize;
