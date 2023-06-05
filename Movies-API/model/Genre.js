const mongoose = require("mongoose");
const GenreSchema = mongoose.Schema({
  name: String
});
const Genre = mongoose.model("Genre", GenreSchema);

module.exports.Genre = Genre;
module.exports.GenreSchema = GenreSchema;