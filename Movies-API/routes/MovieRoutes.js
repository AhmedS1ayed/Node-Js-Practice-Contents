const express = require("express");
const router = express.Router();
const MovieController = require("../controller/MovieController");

router.get("/", (req, res) => MovieController.getMovies(req, res));
router.post("/", (req, res) => MovieController.postMovies(req, res));
router.put("/",(req,res) => MovieController.updateMovie(req,res));
module.exports = router;
