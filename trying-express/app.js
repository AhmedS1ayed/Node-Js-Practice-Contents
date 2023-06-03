const config = require("config");
const startupDebugger = require("debug")('app::startup');
const dbDebugger = require("debug")('app::db');
const express = require("express");
// logging https
const morgan = require("morgan");
// secure header
const helmet = require("helmet");
// validation
const Joi = require("joi");
const app = express();


const courses = [
  { id: 1, subject: "physics" },
  { id: 2, subject: "math" },
];

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());

//configuration
console.log(config.get('name'));
console.log(config.get('mail'));
console.log(config.get('mail.password'));

if(app.get('env') == 'development')
{
  app.use(morgan('tiny'));
  startupDebugger('morgan enabled ...');
}

dbDebugger('connected to database ...');


app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = findCourseById(req.params.id);

  if (course) res.send(course);
  else res.status(404).send("course with givin ID not found");
});

app.post("/api/courses", (req, res) => {
  const course = req.body;
  const result = validateCourse(course);
  if (result.error) res.status(404).send("error validation");
  
  course.id = courses.length + 1;
  courses.push(course);
  res.send(courses);
});

app.put("/api/courses/:id", (req, res) => {
  const course = findCourseById(req.params.id);
  if (!course) res.status(404).send("error couldn't find course");

  const result = validateCourse(req.body);

  if (result.error) res.status(404).send(result.error);

  course.subject = req.body.subject;
  res.send(courses);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = findCourseById(req.params.id);
  if (!course) res.status(404).send("error couldn't find course");

  const idx = courses.indexOf(course);
  courses.splice(idx);

  res.send(courses);
});

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

const port = process.env.PORT || 8080;
app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${port}`);
});
