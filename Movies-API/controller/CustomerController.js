const Customer = require("../model/Customer").Customer;
const validateCustomer = require("../model/Customer").validateCustomer;
const dbDebugger = require("debug")("app::db");
const appDebugger = require("debug")("app::startup");

async function getCustomer(req, res,next) {
  const customer = await Customer.find(req.body);
  res.send(customer);
}

async function postCustomer(req, res, next) {
  const validate = validateCustomer(req.body);
  if (validate.error) {
    appDebugger(validate.error);
    next(validate.error);
  }

  const customer = new Customer(req.body);
  const result = await customer.save();
  res.send(result);
}

module.exports.getCustomer = getCustomer;
module.exports.postCustomer = postCustomer;
