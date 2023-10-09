import { Sequelize } from "sequelize";

import {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
  DB_NAME,
} from "../config/config.js";

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  port: DB_PORT,
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
