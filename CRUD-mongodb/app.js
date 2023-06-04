const dbDebugger = require("debug")("app::db");
const express = require("express");
const mongoose = require("mongoose");
const server = require("./server");
const app = express();

const courseSchema = mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Node js Course",
    author: "Musashi",
    tags: ["node", "backend"],
    price: 7,
    isPublished: true,
  });
  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const courses = await Course
    // .find({ price: { $gte: 2, $lte: 20 } })
    // .find()
    // .or([{author:'Ahmed'},{author:'Musashi'}])
    // .find({author:/^A/})
    .find()
    .limit(50)
    .sort({ author: 1 })
    .select({ author: 1, tags: 1, price: 1 });
    // .count();
  console.log(courses);
}

app.use(express.json());

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening to port ${port} ...`);
});
server.connectDB();
getCourses();
// createCourse();
