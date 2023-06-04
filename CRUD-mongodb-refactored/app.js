const dbDebugger = require("debug")("app::db");
const appDebugger = require("debug")("app::startup");
const Course = require("./model/Course");
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./server");
const app = express();
const CourseRoutes = require("./routes/CourseRoutes");

app.use(express.json());
app.use('/course',CourseRoutes);
const port = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(port, () => {
    appDebugger(`Listening to port ${port} ...`);
  });
});