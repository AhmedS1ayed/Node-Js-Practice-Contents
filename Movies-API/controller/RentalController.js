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

async function postRental(req, res,next) {
  const validate = validateRental(req.body);
  if (validate.error) {
    appDebugger(validate.error);
    next();
  }

  const rental = new Rental(req.body);
  try {
    const result = await rental.save();
    res.send(result);
  } catch (ex) {
    dbDebugger(ex.message);
    next();
  }
}

module.exports.getRental = getRental;
module.exports.postRental = postRental;
