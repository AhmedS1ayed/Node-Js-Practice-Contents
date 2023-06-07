const User = require("../model/User").User;
const validateUser = require("../model/User").validateUser;
const dbDebugger = require("debug")("app::db");
const appDebugger = require("debug")("app::startup");

async function getUser(req, res) {
  const user = await User.find(req.body);
  res.send(user);
}

async function postUser(req, res) {
  const result = validateUser(req.body);
  if (result.error)
  {
    appDebugger("Error 400 Bad Request.");
    res.status(400).send("Error Customer Validation.");
    return;
  }

  const user = new User(req.body);
  try {
    const result = await user.save();
    res.send(result);
  } catch (ex) {
    dbDebugger(ex.message);
    res.status(400).send("Error 400 Bad Request.");
  }
}

module.exports.getUser = getUser;
module.exports.postUser = postUser;
