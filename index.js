const { Band } = require("./models/Band");
const { Musician } = require("./models/Musician");
const { Song } = require("./models/Song");
// Define associations here

Musician.hasMany(Band);
Band.belongsTo(Musician);

Song.belongsToMany(Band, { through: "song-band" });
Band.belongsToMany(Song, { through: "song-band" });
module.exports = {
  Band,
  Musician,
  Song,
};
