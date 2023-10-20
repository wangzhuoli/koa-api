/**
 * 项目配置文件
 *
 * 本文件负责加载和管理应用程序的各种配置参数，以便在不同环境中轻松配置应用。
 * 它导入 dotenv 模块以加载环境变量，并定义常量来存储配置值。
 *
 * 通过环境变量配置，可以实现开发、测试和生产环境的无缝切换和部署。
 */
import dotenv from "dotenv";

dotenv.config();

// 服务端口号
export const APP_PORT = process.env["APP_PORT"];

// Mysql.地址
export const MYSQL_HOST = process.env["MYSQL_HOST"];

// Mysql.用户名
export const MYSQL_USERNAME = process.env["MYSQL_USERNAME"];

// Mysql.密码
export const MYSQL_PASSWORD = process.env["MYSQL_PASSWORD"];

// Mysql.端口号
export const MYSQL_PORT = process.env["MYSQL_PORT"];

// 数据库名称
export const DB_NAME = process.env["DB_NAME"];

// jwt
export const JWT_SECRET_KEY = "koa_token";
