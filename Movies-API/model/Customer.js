const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
});

const Customer = mongoose.model("customers", CustomerSchema);

module.exports.Customer = Customer;
