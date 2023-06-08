require("express-async-errors");
const error = require("./middleware/error");
const express = require("express");
const db = require("./dbconnection");
const appDebugger = require("debug")("app::startup");
const helmet = require("helmet");
const morgan = require("morgan");

const app = new express();
const MovieRoutes = require("./routes/MovieRoutes");
const CustomerRoutes = require("./routes/CustomerRoutes");
const GenreRoutes = require("./routes/GenreRoutes");
const RentalRoutes = require("./routes/RentalRoutes");
const UserRoutes = require("./routes/UserRoutes");
const authRoutes = require("./routes/authRoutes");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

if (app.get("env") == "development"){
  app.use(morgan("tiny"));
}

app.use("/Movie", MovieRoutes);
app.use("/Customer", CustomerRoutes);
app.use("/Genre", GenreRoutes);
app.use("/Rental", RentalRoutes);
app.use("/User", UserRoutes);
app.use("/auth", authRoutes);
app.use(error);

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
