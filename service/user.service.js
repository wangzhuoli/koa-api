import User from "#model/user.model.js";
import md5 from "md5";

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
