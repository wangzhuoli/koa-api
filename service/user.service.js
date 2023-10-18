import User from "#model/user.model.js";
import md5 from "md5";
import { Op } from "sequelize";
import dayjs from "#plugins/dayjs.js";

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
  const { page, size, keyword } = params;
  const where = {};
  if (keyword) {
    where.name = {
      [Op.like]: `%${keyword}%`,
    };
  }
  const data = await User.findAll({ limit: size, offset: size * (page - 1), where, attributes: ["id", "name", "createdAt", "updatedAt"] });
  const count = await User.count({ where });
  const formatData = data.map((i) => {
    i.dataValues.createdAt = dayjs(i.dataValues.createdAt).format("YYYY-MM-DD HH:mm:ss");
    i.dataValues.updatedAt = dayjs(i.dataValues.updatedAt).format("YYYY-MM-DD HH:mm:ss");
    return i;
  });
  return { data: formatData, count };
};
