const mongoose = require("mongoose");
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(3).required(),
  password: Joi.number().required(),
});

const validateUser = (user) => {
  return schema.validate(user);
};

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("users", UserSchema);

module.exports.User = User;
module.exports.validateUser = validateUser;
