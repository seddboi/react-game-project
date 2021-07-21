// const User = require("../User")
// const Weapon = require("../Weapon");
const userdata = require("./userData")
const weapondata = require("./weapons")
const charData = require("./userChar")

const seedDatabase = async (sequelize, User, Weapon, UserChar) => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });
  
  
  await Weapon.bulkCreate(weapondata, {
    individualHooks: true,
    returning: true,
  });

  await UserChar.bulkCreate(charData,{
    individualHooks: true,
    returning: true
  })
  console.log("we are done setting up the database");
};

module.exports = seedDatabase;
