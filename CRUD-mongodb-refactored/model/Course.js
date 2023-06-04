const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
    _id: { type: String, default: () => Math.random().toString(36).slice(2) },
    name: String,
    author: String,
    price: Number,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
  });
  const Course = mongoose.model("Course", courseSchema);

  module.exports = Course