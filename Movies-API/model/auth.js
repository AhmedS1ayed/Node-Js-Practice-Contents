const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const schema = Joi.object({
  email: Joi.string().min(3).required(),
  password: Joi.number().required(),
});
const validateLogin = (user) => {
  return schema.validate(user);
};
module.exports.validateLogin = validateLogin;