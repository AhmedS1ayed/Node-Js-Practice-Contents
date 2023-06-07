const mongoose = require("mongoose");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).required(),
});
const GenreSchema = new mongoose.Schema({
  name: String,
});
const validateGenre = (genre) => {
  return schema.validate(genre);
};

module.exports.GenreSchema = GenreSchema;
module.exports.GenreSchemaValidation = schema;
module.exports.validateGenre = validateGenre;