import User from "#model/user.model.js";

/**
 * 创建用户
 * @param {Object} params - 创建参数
 * @param { String } params.name - 用户名
 * @param { String } params.password - 密码
 * **/
export const createUser = async (params) => {
  const { name, password } = params;
  const result = await User.create({ name, password });
  return result.dataValues;
};

/**
 * 查找用户
 * @param {Object} params - 查询参数
 * @param { String } [params.name] - 用户名
 * @param { Number } [params.id] - ID
 * **/
export const findUser = async (params) => {
  const { name, id } = params;
  const where = {};
  // 通过name查找
  name && Object.assign(where, { name });
  // 通过id查找
  id && Object.assign(where, { id });
  const result = await User.findOne({
    where: { name },
    attributes: ["id", "name"],
  });
  return result?.dataValues;
};
