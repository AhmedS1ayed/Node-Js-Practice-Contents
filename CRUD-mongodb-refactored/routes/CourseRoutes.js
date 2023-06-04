const express = require('express');
const Router = express.Router();
const CourseController = require('../controller/CourseController');

Router.get('/',(req,res) => CourseController.getCourses(req,res));
Router.post('/',(req,res) => CourseController.postCourse(req,res));
Router.put('/',(req,res) => CourseController.putCourse(req,res));
Router.delete('/',(req,res) => CourseController.deleteCourse(req,res));
module.exports = Router