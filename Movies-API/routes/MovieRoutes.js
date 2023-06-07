const express = require("express");
const router = express.Router();
const {getMovies,postMovies,updateMovie} = require("../controller/MovieController");

router.get("/", (req, res) => getMovies(req, res));
router.post("/", (req, res) => postMovies(req, res));
router.put("/",(req,res) => updateMovie(req,res));
module.exports = router;
