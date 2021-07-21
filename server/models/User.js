// const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcrypt");
// const sequelize = require('../config/connection');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
    },
    {
      timestamps: true,
      freezetablename: true,
      underscore: true,
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
      },
    }
  );

  User.checkPassword = (loginPw) => {
    return bcrypt.compareSync(loginPw, this.password);
  };

  return User;
};
