const {Sequelize, sequelize} = require('../db');

class Song extends Model {}

Song.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER
}{
    sequelize: db, 
    modelName: "song"
});

let Song;

module.exports = {
    Song
};