const User = require("../model/User").User;
const validateUser = require("../model/User").validateUser;
const validateLogin = require("../model/auth").validateLogin;
const appDebugger = require("debug")("app::startup");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const generateAuth = require("../model/auth").generateAuth;

async function postLogin(req, res,next) {
  const validate = validateLogin(req.body);
  if (validate.error) {
    appDebugger(validate.error);
    next(validate.error);
  }

  const user = await User.findOne({ email: req.body.email });
  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) return res.send("invalid email or password");
  
  token = user.generateAuthToken();
  return res.send(token);
}

module.exports.postLogin = postLogin;
