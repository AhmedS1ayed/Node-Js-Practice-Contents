const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
  _id: { type: String, default: () => Math.random().toString(36).slice(2) },
  name: String,
  author: { type: String, required: true },
  category:{
    type:String,
    enum:['web','network'],
    required:true
  },
  tags: [String],
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
