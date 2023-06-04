const mongoose = require("mongoose");
const dbDebugger = require("debug")("app::db");
async function connectDB() {
  return mongoose
    .connect(`mongodb://127.0.0.1:27017/person`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => dbDebugger(`Connected to MongoDB ...`))
    .catch((err) => dbDebugger(`Error Connecting to MongoDB ...`, err));
}
module.exports = connectDB;