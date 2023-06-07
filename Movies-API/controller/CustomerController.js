const Customer = require("../model/Customer").Customer;
const validateCustomer = require("../model/Customer").validateCustomer;
const dbDebugger = require("debug")("app::db");
const appDebugger = require("debug")("app::startup");


async function getCustomer(req, res) {
  const customer = await Customer.find(req.body);
  res.send(customer);
}

async function postCustomer(req, res,next) {
  const validate = validateCustomer(req.body);
  if (validate.error)
  {
    appDebugger("Error 400 Bad Request.");
    res.status(400).send("Error Customer Validation.");
    return next();
  }

  const customer = new Customer(req.body);
  try {
    const result = await customer.save();
    res.send(result);
  } catch (ex) {
    dbDebugger(ex.message);
    res.status(400).send("Error 400 Bad Request.");
    return next();
  }
}

module.exports.getCustomer = getCustomer;
module.exports.postCustomer = postCustomer;
