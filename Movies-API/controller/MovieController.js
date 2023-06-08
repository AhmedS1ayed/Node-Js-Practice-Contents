const Movie = require("../model/Movie").Movie;
const validateMovie = require("../model/Movie").validateMovie;
const dbDebugger = require("debug")("app::db");
const appDebugger = require("debug")("app::startup");


async function getMovies(req, res,next) {
  const movie = await Movie.find(req.body);
  res.send(movie);
}

async function postMovies(req, res,next) {
  const validate = validateMovie(req.body);
  if (validate.error)
  {
    appDebugger(validate.error);
    next(validate.error);
  }

  const movie = new Movie(req.body);
  try {
    const result = await movie.save();
    res.send(result);
  } catch (ex) {
    dbDebugger(ex.message);
    next();
  }
}

async function updateMovie(req, res,next) {
    const movie = await Movie.findById(req.body._id);
    const result = await movie.set(req.body);
    await movie.save();
    res.send(result);
}

module.exports.getMovies = getMovies;
module.exports.postMovies = postMovies;
module.exports.updateMovie = updateMovie;