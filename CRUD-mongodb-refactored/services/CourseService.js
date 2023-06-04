const Course = require("../model/Course");
async function createCourse(newCourse) {
  const course = new Course(newCourse);
  const result = await course.save();
  return result;
}

async function getCourses(req, res) {
  const courses = await Course.find();
  console.log(courses);
  return courses;
}

async function updateCourse(newCourse) {
  const course = await Course.findById(newCourse._id);
  if (!course) return;
  const result = await course.set(newCourse);
  return result;
}
async function deleteCourse(newCourse) {
  const course = await Course.deleteOne(newCourse);
  return Course.find();
}

module.exports.createCourse = createCourse;
module.exports.getCourses = getCourses;
module.exports.updateCourse = updateCourse;
module.exports.deleteCourse = deleteCourse;
