require("express-async-errors");
const express = require("express");
const db = require("./startup/dbconnection");
const appDebugger = require("debug")("app::startup");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./startup/routes");

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

if (app.get("env") == "development") {
  app.use(morgan("tiny"));
}
routes(app);

const port = process.env.PORT || 8080;
db.connectDB()
  .then(() => {
    app.listen(port, () => {
      appDebugger(`Listening to port ${port} ...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
