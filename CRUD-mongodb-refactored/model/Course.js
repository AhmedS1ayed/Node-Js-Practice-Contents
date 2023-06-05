const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
  name: String,
  author: { type: String, required: true },
  category: {
    type: String,
    enum: ["web", "network"],
    required: true,
  },
  tags: {
    type: Array,
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: "A course should have at least 1 tag",
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
  },
});
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
