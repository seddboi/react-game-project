// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user_chars",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "1",
      },
      xp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "15",
      },
      health: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "15",
      },
      // user_id: {
      //   type: DataTypes.INTEGER,

      //   references: {
      //     model: "users",
      //     key: "id",
      //   },
      // },
      // weapon_id: {
      //   type: DataTypes.INTEGER,

      //   references: {
      //     model: "weapons",
      //     key: "id",
      //   },
      // },
    },
    {
      timestamps: true,
      freezetablename: true,
      underscore: true,
    }
  );
};
