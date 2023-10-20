import Role from "#src/model/role.model.js";

/**
 * 查找所有角色
 * **/
export const findAll = async () => {
  return await Role.findAll({
    attributes: ["id", "name", "created_at", "updated_at"],
  });
};

/**
 * 创建角色
 * @param {Object} params - 创建参数
 * @param { String } params.name - 角色名
 * **/
export const create = async (params) => {
  const { name } = params;
  const result = await Role.create({ name });
  return result.dataValues;
};

/**
 * 查找单个角色
 * @param {Object} params - 查询参数
 * @param { Number } [params.id] - ID
 * **/
export const findRole = async (params) => {
  const result = await Role.findOne({ where: params, attributes: ["id", "name", "created_at", "updated_at"] });
  return result?.dataValues;
};

/**
 * 更新角色
 * @param {Object} params - 更新参数
 * @param { Number } params.id - ID
 * @param { String } params.name - 角色名
 * **/
export const update = async (params) => {
  const { id, name } = params;
  const result = await Role.update({ name }, { where: { id } });
  return result?.dataValues;
};

/**
 * 删除角色
 * @param {Object} params - 删除参数
 * @param { Number } params.id - ID
 * **/
export const remove = async (params) => {
  const { id } = params;
  return await Role.destroy({ where: { id } });
};
