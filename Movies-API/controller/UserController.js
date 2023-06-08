const User = require("../model/User").User;
const validateUser = require("../model/User").validateUser;
const dbDebugger = require("debug")("app::db");
const appDebugger = require("debug")("app::startup");
const _ = require("lodash");
const bcrypt = require("bcrypt");

async function getUser(req, res, next) {
  const user = await User.find(req.body);
  res.send(user);
}

async function postUser(req, res, next) {
  const validate = validateUser(req.body);
  if (validate.error) {
    appDebugger(validate.error);
    next(validate.error);
  }

  const user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  const result = await user.save();
  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .send(_.pick(result, ["_id", "email", "name"]));
}

module.exports.getUser = getUser;
module.exports.postUser = postUser;
