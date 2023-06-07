const User = require("../model/User").User;
const validateUser = require("../model/User").validateUser;
const appDebugger = require("debug")("app::startup");

async function postLogin(req, res) {
    const result = validateUser(req.body);
    if (result.error)
    {
      appDebugger("Error 400 Bad Request.");
      res.status(400).send("Error Customer Validation.");
      return;
    }

  const user = await User.find(req.body);
  if(!user) res.send('user not found');
  res.send(user);
}

module.exports.postLogin = postLogin;