const Genre = require("../model/Genre").Genre;
const validateGenre = require("../model/Customer").validateGenre;
const appDebugger = require("debug")("app::startup");

async function getGenre(req, res, next) {
  const genre = await Genre.find(req.body);
  res.send(genre);
}

async function postGenre(req, res, next) {
  const validate = validateGenre(req.body);
  if (validate.error) {
    appDebugger(validate.error);
    next(validate.error);
  }

  const genre = new Genre(req.body);
  const result = await genre.save();
  res.send(result);
}

module.exports.getGenre = getGenre;
module.exports.postGenre = postGenre;
