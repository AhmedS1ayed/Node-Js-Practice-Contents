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

module.exports.getMovies = getMovies;
module.exports.postMovies = postMovies;
