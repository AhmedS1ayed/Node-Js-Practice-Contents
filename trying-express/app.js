const config = require("config");
const startupDebugger = require("debug")("app::startup");
const coursesRouter = require("./routes/coursesRouter");
const dbDebugger = require("debug")("app::db");
const express = require("express");
// logging https
const morgan = require("morgan");
// secure header
const helmet = require("helmet");
// validation
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use("/api/courses", coursesRouter);

//configuration
console.log(config.get("name"));
console.log(config.get("mail"));
console.log(config.get("mail.password"));

if (app.get("env") == "development") {
  app.use(morgan("tiny"));
  startupDebugger("morgan enabled ...");
}

dbDebugger("connected to database ...");

const port = process.env.PORT || 8080;
app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${port}`);
});
