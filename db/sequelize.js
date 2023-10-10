/**
 * 数据库连接配置文件
 *
 * 本文件负责创建和配置 Sequelize 实例，用于连接到 MySQL 数据库。
 * 这个文件的主要作用是建立和管理数据库连接，以便在整个应用程序中执行数据库操作。
 */

import { Sequelize } from "sequelize";
import {
  MYSQL_HOST,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  DB_NAME,
} from "#config/config.js";

const sequelize = new Sequelize(DB_NAME, MYSQL_USERNAME, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: "mysql",
  port: MYSQL_PORT,
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
