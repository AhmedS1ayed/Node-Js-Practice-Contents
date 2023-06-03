const express = require("express");
const router = express.Router();
const courses = require("../model/coursesModel");
const coursesServices = require("../services/coursesServices");
const validateCourse = coursesServices.validateCourse;
const findCourseById = coursesServices.findCourseById;
const insertCourse = coursesServices.insertCourse;
const updateCourse = coursesServices.updateCourse;
const deleteCourse = coursesServices.deleteCourse;


router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const course = findCourseById(req.params.id);

  if (course) res.send(course);
  else res.status(404).send("course with givin ID not found");
});

router.post("/", (req, res) => {
  insertCourse(req,res);
});

router.put("/:id", (req, res) => {
  updateCourse(req,res);
});

router.delete("/:id", (req, res) => {
  deleteCourse(req,res);
});

module.exports = router;