/**
 * 用户角色模型
 * **/
import { DataTypes } from "sequelize";
import sequelize from "#src/db/sequelize.js";

const Role = sequelize.define("role", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Role.sync({ force: true }).then();

export default Role;
