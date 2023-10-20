/**
 * 用户角色模型
 * **/
import { DataTypes } from "sequelize";
import sequelize from "#src/db/sequelize.js";

const Role = sequelize.define("role", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "角色名称，唯一",
  },
});

// Role.sync({ force: true }).then();

export default Role;
