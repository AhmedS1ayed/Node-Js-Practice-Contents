const mongoose = require("mongoose");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().min(15).required(),
  gender:Joi.string().valid("male","female").required()
});
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

const validateCustomer = (customer) => {
  return schema.validate(customer);
};

module.exports.Customer = Customer;
module.exports.validateCustomer = validateCustomer;
