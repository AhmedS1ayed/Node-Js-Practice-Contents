const Genre = require("../model/Genre").Genre;
const validateGenre = require("../model/Customer").validateGenre;
const appDebugger = require("debug")("app::startup");

async function getGenre(req, res) {
  const genre = await Genre.find(req.body);
  res.send(genre);
}

async function postGenre(req, res,next) {
  const validate = validateGenre(req.body);
  if (validate.error)
  {
    appDebugger("Error 400 Bad Request.");
    res.status(400).send("Error Genre Validation.");
    return next();
  }

  const genre = new Genre(req.body);
  try {
    const result = await genre.save();
    res.send(result);
  } catch (ex) {
    dbDebugger(ex.message);
    res.status(400).send("Error 400 Bad Request.");
    return next();
  }
}

module.exports.getGenre = getGenre;
module.exports.postGenre = postGenre;
