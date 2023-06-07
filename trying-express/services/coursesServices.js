const Joi = require("joi");
const courses = require("../model/coursesModel");

const validateCourse = (course) => {
  const schema = {
    subject: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
};

const findCourseById = (id) => {
  const course = courses.find((cou) => {
    if (cou.id === parseInt(id)) return cou;
  });
  return course;
};

const insertCourse = (req, res) => {
  const course = req.body;
  const result = validateCourse(course);
  if (result.error) res.status(404).send("error validation");

  course.id = courses.length + 1;
  courses.push(course);
  res.send(courses);
};

const updateCourse = (req, res) => {
  const course = findCourseById(req.params.id);
  if (!course) res.status(404).send("error couldn't find course");

  const result = validateCourse(req.body);

  if (result.error) res.status(404).send(result.error);

  course.subject = req.body.subject;
  res.send(courses);
};

const deleteCourse = (req, res) => {
  const course = findCourseById(req.params.id);
  if (!course) res.status(404).send("error couldn't find course");

  const idx = courses.indexOf(course);
  courses.splice(idx);

  res.send(courses);
};
module.exports.validateCourse = validateCourse;
module.exports.findCourseById = findCourseById;
module.exports.insertCourse = insertCourse;
module.exports.updateCourse = updateCourse;
module.exports.deleteCourse = deleteCourse;
