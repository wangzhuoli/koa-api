import { DataTypes } from "sequelize";
import sequelize from "#src/db/sequelize.js";

/**
 * @description 用户模型
 * **/
const User = sequelize.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    comment: "用户名，唯一",
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: true,
    comment: "密码",
  },
});

// User.sync({ force: true }).then();

export default User;
