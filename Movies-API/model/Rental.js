const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customers",
  },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "movies" },
});
const Rental = mongoose.model("rentals", RentalSchema);

module.exports.Rental = Rental;
