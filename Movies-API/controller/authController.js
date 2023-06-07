const User = require("../model/User").User;
const validateUser = require("../model/User").validateUser;
const validateLogin = require("../model/auth").validateLogin;
const appDebugger = require("debug")("app::startup");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const generateAuth = require("../model/auth").generateAuth;

async function postLogin(req, res, next) {
  const validate = validateLogin(req.body);
  if (validate.error) {
    appDebugger("Error 400 Bad Request.");
    res.status(400).send("Error Bad Request.");
    return next();
  }

  const user = await User.findOne({ email: req.body.email });
  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) {
    res.send("invalid email or password");
    return next();
  }
  token = user.generateAuthToken();
  return res.send(token);
}

module.exports.postLogin = postLogin;
