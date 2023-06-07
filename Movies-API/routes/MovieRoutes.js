const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const {
  getMovies,
  postMovies,
  updateMovie,
} = require("../controller/MovieController");

router.get("/", (req, res, next) => getMovies(req, res, next));
router.post("/",auth, (req, res, next) => postMovies(req, res, next));
router.put("/", (req, res, next) => updateMovie(req, res, next));
module.exports = router;
