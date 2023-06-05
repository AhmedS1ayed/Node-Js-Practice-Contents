const mongoose = require("mongoose");
const Genre = require("./Genre");
const GenreSchema = Genre.GenreSchema;

const MovieSchema = mongoose.Schema({
  name: {type : String ,required : true , minlength: 3 , maxlength: 5},
  genere: GenreSchema,
  rate: Number,
  price: Number,
  date: { type: Date, default: Date.now },
});
const Movie = mongoose.model("Movie", MovieSchema);

module.exports.Movie = Movie;