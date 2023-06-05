const mongoose = require("mongoose");
const CustomerSchema = mongoose.Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports.Customer = Customer;
