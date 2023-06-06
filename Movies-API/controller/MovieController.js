const Movie = require("../model/Movie").Movie;
const dbDebugger = require("debug")("app::db");

async function getMovies(req, res) {
  const movie = await Movie.find(req.body);
  res.send(movie);
}

async function postMovies(req, res) {
  const movie = new Movie(req.body);

  try {
    const result = await movie.save();
    res.send(result);
  } catch (ex) {
    dbDebugger(ex.message);
    res.status(400).send("Error 400 Bad Request.");
  }
}

async function updateMovie(req, res) {
  try {
    const movie = await Movie.findById(req.body._id);
    const result = await movie.set(req.body);
    await movie.save();
    res.send(result);
  } catch (ex) {
    dbDebugger(ex.message);
    res.status(400).send("Error 400 Bad Request.");
  }
}

module.exports.getMovies = getMovies;
module.exports.postMovies = postMovies;
module.exports.updateMovie = updateMovie;