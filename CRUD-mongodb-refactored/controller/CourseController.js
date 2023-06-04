const CourseService = require("../services/CourseService");

async function postCourse(req, res) {
  const newCourse = req.query;
  const Course = await CourseService.createCourse(newCourse);
  res.send(Course);
}
async function getCourses(req, res) {
  const Courses = await CourseService.getCourses();
  res.send(Courses);
}
async function putCourse(req, res) {
  const newCourse = req.query;
  const Course = await CourseService.updateCourse(newCourse);
  res.send(Course);
}
async function deleteCourse(req, res) {
  const newCourse = req.query;
  const Course = await CourseService.deleteCourse(newCourse);
  res.send(Course);
}

module.exports.postCourse = postCourse;
module.exports.getCourses = getCourses;
module.exports.putCourse = putCourse;
module.exports.deleteCourse = deleteCourse;
