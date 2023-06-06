const express = require("express");
const mongoose = require("mongoose");
const db = require("./dbconnection");
const dbDebugger = require("debug")("app::db");
const appDebugger = require("debug")("app::startup")
const helmet = require("helmet");
const morgan = require("morgan");

const app = new express();
const MovieRoutes = require('./routes/MovieRoutes');
const CustomerRoutes = require('./routes/CustomerRoutes');
const GenreRoutes = require('./routes/GenreRoutes');
const RentalRoutes = require('./routes/RentalRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

if (app.get("env") == "development")
  app.use(morgan("tiny"));


app.use("/Movie", MovieRoutes);
app.use("/Customer", CustomerRoutes);
app.use("/Genre", GenreRoutes);
app.use("/Rental",RentalRoutes);



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