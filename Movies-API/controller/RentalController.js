const Rental = require("../model/Rental").Rental;
const dbDebugger = require("debug")("app::db");





async function getRental(req, res) {
  const rental = await Rental.find(req.body).populate('customer').populate('movie');
  res.send(rental);
}

async function postRental(req, res) {
  const rental = new Rental(req.body);

  try {
    const result = await rental.save();
    res.send(result);
  } catch (ex) {
    dbDebugger(ex.message);
    res.status(400).send("Error 400 Bad Request.");
  }
  res.send('Done');
}

module.exports.getRental = getRental;
module.exports.postRental = postRental;
