const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(3).required(),
  password: Joi.string().required(),
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

UserSchema.methods.generateAuthToken = function(){
  const token =  jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
  return token;
}
const User = mongoose.model("users", UserSchema);

module.exports.User = User;
module.exports.validateUser = validateUser;
