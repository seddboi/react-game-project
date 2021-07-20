// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');


module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "weapon",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      damage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      isVampiric: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: "0",
      },
      isParalysis: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: "0",
      },
      isPoison: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: "0",
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // user_char_id: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: "user_char",
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
