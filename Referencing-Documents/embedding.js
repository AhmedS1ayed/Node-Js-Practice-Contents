const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/college")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});
const courseSchema = new mongoose.Schema({
  name: String,
  author: authorSchema,
});

const Author = mongoose.model("Author", authorSchema);
const Course = mongoose.model("Course", courseSchema);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
  return Promise.resulve(author);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

// const author = await createAuthor('Ahmed', 'My bios', 'My Website');

createCourse(
  "Node Course",
  new Author({
    name: "Ahmed",
    bio: "My Bios",
    website: "My Website",
  })
);

// listCourses();
