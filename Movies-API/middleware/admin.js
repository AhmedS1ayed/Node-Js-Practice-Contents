const User = require("../model/User").User;

async function admin(req, res, next) {
  if (req.user.isAdmin) return next();
  return res.send("Error Not Admin.");
}
module.exports = admin;
