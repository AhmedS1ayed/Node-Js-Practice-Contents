const Rental = require("../model/Rental").Rental;
const validateRental = require("../model/Rental").validateRental;
const dbDebugger = require("debug")("app::db");
const appDebugger = require("debug")("app::startup");

async function getRental(req, res) {
  const rental = await Rental.find(req.body)
    .populate("customer")
    .populate("movie");
  res.send(rental);
}

async function postRental(req, res) {
  const result = validateRental(req.body);
  if (result.error) {
    appDebugger("Error 400 Bad Request.");
    res.status(400).send("Error Customer Validation.");
    return;
  }

  const rental = new Rental(req.body);
  try {
    const result = await rental.save();
    res.send(result);
  } catch (ex) {
    dbDebugger(ex.message);
    res.status(400).send("Error 400 Bad Request.");
  }
}

module.exports.getRental = getRental;
module.exports.postRental = postRental;
