const {Sequelize, sequelize} = require('../db');

class Musician extends Model {}

Musician.init({
  name: DataTypes.STRING,
  instrument: DataTypes.STRING,
}{
    sequelize: db, 
    modelName: "musician"
});

let Musician;

module.exports = {
    Musician
};