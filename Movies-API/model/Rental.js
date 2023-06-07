const Joi = require("joi");
const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customers",
  },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "movies" },
});
const Rental = mongoose.model("rentals", RentalSchema);

const validateRental = (rental) => {
  if(!mongoose.Types.ObjectId.isValid(rental.customer) || !mongoose.Types.ObjectId.isValid(rental.movie))
    return {error : true};
  else
    return {error:false};
};

module.exports.Rental = Rental;
module.exports.validateRental = validateRental;