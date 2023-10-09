import User from "../model/user.model.js";

export const createUser = async (params) => {
  const { name, password } = params;
  const result = await User.create({ name, password });
  return result.dataValues;
};
// 获取用户
export const getUser = async (params) => {
  const { name } = params;
  return await User.findOne({ where: { name } });
};
