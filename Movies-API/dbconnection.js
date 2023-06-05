const mongoose = require("mongoose");
const dbDebugger = require("debug")("app::db");
const config = require("config");

async function connectDB() {
  return mongoose
    .connect(config.get("connection-string"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => dbDebugger(`Connected to MongoDB ...`))
    .catch((err) => dbDebugger(`Error Connecting to MongoDB ...`, err));
}
module.exports = connectDB;