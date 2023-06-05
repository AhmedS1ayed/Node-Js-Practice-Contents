const Customer = require("../model/Customer").Customer;

async function getCustomer(req, res) {
  const customer = await Customer.find(req.body);
  res.send(customer);
}

async function postCustomer(req, res) {
  const customer = new Customer(req.body);

  try {
    const result = await customer.save();
    res.send(result);
  } catch (ex) {
    dbDebugger(ex.message);
    res.status(400).send("Error 400 Bad Request.");
  }
}

module.exports.getCustomer = getCustomer;
module.exports.postCustomer = postCustomer;
