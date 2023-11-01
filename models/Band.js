const { Sequelize, sequelize } = require("../db");

class Band extends Model {}

Band.init({
  name: DataTypes.STRING,
  genre: DataTypes.STRING,
}{
    sequelize: db, 
    modelName: "band"
});

let Band;

module.exports = {
  Band,
};
