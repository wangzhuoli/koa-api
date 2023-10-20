import Role from "#src/model/role.model.js";

// 查找所有角色
export const findAll = async () => {
  return await Role.findAll();
};

// 创建角色
export const create = async (params) => {
  const { name } = params;
  const result = await Role.create({ name });
  return result.dataValues;
};
