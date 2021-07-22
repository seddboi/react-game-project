const UserModel = require("./User");
const UserCharModel = require("./UserChar");
const WeaponModel = require("./Weapon");
const seeders = require("./seeds");
const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

const User = UserModel(sequelize, Sequelize);
const UserChar = UserCharModel(sequelize, Sequelize);
const Weapon = WeaponModel(sequelize, Sequelize);

User.hasMany(UserChar, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Weapon.hasOne(UserChar, {
  foreignKey: "weapon_id",
  onDelete: "CASCADE"
});

UserChar.belongsTo(User, {
  foreignKey: "user_id",
});

UserChar.belongsTo(Weapon, {
  foreignKey: "weapon_id"
});



seeders(sequelize, User, Weapon, UserChar);
// sequelize.sync({ force: true }).then(() => {
//   console.log("tables have been updated");
// });

module.exports = { User, Weapon, UserChar };
