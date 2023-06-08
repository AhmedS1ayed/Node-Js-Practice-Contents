const error = require("../middleware/error");
const MovieRoutes = require("../routes/MovieRoutes");
const CustomerRoutes = require("../routes/CustomerRoutes");
const GenreRoutes = require("../routes/GenreRoutes");
const RentalRoutes = require("../routes/RentalRoutes");
const UserRoutes = require("../routes/UserRoutes");
const authRoutes = require("../routes/authRoutes");

module.exports = function(app){
    app.use("/Movie", MovieRoutes);
    app.use("/Customer", CustomerRoutes);
    app.use("/Genre", GenreRoutes);
    app.use("/Rental", RentalRoutes);
    app.use("/User", UserRoutes);
    app.use("/auth", authRoutes);
    app.use(error);
}