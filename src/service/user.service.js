import User from "#src/model/user.model.js";
import md5 from "md5";
import { Op } from "sequelize";

/**
 * 创建用户
 * @param {Object} params - 创建参数
 * @param { String } params.name - 用户名
 * @param { String } params.password - 密码
 * **/
export const createUser = async (params) => {
  const { name, password } = params;
  const result = await User.create({ name, password: md5(password) });
  return result.dataValues;
};

/**
 * 查找用户
 * @param {Object} params - 查询参数
 * @param { String } [params.name] - 用户名
 * @param { Number } [params.id] - ID
 * @param { String } [params.password] - ID
 * **/
export const findUser = async (params) => {
  const { name, id, password } = params;
  const where = {};
  // 通过name查找
  name && Object.assign(where, { name });
  // 通过id查找
  id && Object.assign(where, { id });
  // 通过密码查找
  password && Object.assign(where, { password: md5(password) });
  const result = await User.findOne({
    where,
    attributes: ["id", "name"],
  });
  return result?.dataValues;
};

/**
 * 查找用户
 * @param {Object} params - 查询参数
 * @param { Number } [params.page] - 页码
 * @param { Number } [params.size] - 每页条数
 * @param { String } [params.keyword] - 模糊查询
 * **/
export const findAllWithPagination = async (params) => {
  const { page, size, name } = params;
  const where = {};
  if (name) {
    where.name = {
      [Op.like]: `%${name}%`,
    };
  }
  const data = await User.findAll({ limit: size, offset: size * (page - 1), where, attributes: ["id", "name", "created_at", "updated_at"] });
  const count = await User.count({ where });
  return { data, count };
};
