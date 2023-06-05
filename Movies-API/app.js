const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./dbconnection");
const dbDebugger = require("debug")("app::db");
const appDebugger = require("debug")("app::startup")
const helmet = require("helmet");
const morgan = require("morgan");

const app = new express();
const MovieRoutes = require('./routes/MovieRoutes');
const CustomerRoutes = require('./routes/CustomerRoutes');
const GenreRoutes = require('./routes/GenreRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
if (app.get("env") == "development")
  app.use(morgan("tiny"));
  
app.use("/Movie", MovieRoutes);
app.use("/Customer", CustomerRoutes);
app.use("/Genre", GenreRoutes);



const port = process.env.PORT || 8080;
connectDB()
  .then(() => {
    app.listen(port, () => {
      appDebugger(`Listening to port ${port} ...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });