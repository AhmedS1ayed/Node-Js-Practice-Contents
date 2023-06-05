const Genre = require("../model/Genre").Genre;

async function getGenre(req, res) {
  const genre = await Genre.find(req.query);
  res.send(genre);
}

async function postGenre(req, res) {
  const genre = new Genre(req.query);

  try {
    const result = await genre.save();
    res.send(result);
  } catch (ex) {
    dbDebugger(ex.message);
    res.status(400).send("Error 400 Bad Request.");
  }
}

module.exports.getGenre = getGenre;
module.exports.postGenre = postGenre;
