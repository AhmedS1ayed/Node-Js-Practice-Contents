const mongoose = require("mongoose");
const Genre = require("./Genre");
const Joi = require("joi");

const GenreSchema = Genre.GenreSchema;
const GenreSchemaValidation = Genre.GenreSchemaValidation;
const schema = Joi.object({
  name: Joi.string().min(3).required(),
  genre: GenreSchemaValidation.required(),
  rate: Joi.number().min(0).required(),
  price: Joi.number().required(),
  stock: Joi.number().min(0).required(),
  date: Joi.date()
});



const MovieSchema = new mongoose.Schema({
  name: {type : String ,required : true , minlength: 3},
  genre: GenreSchema,
  rate: Number,
  price: Number,
  stock: Number,
  date: { type: Date, default: Date.now },
});
const Movie = mongoose.model("movies", MovieSchema);

const validateMovie = (genre) => {
  return schema.validate(genre);
};

module.exports.Movie = Movie;
module.exports.validateMovie = validateMovie;