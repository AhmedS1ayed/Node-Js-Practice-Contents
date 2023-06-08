const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const {
  getMovies,
  postMovies,
  updateMovie,
} = require("../controller/MovieController");

router.get("/", (req, res, next) => getMovies(req, res, next));
router.post("/", [auth, admin], (req, res, next) => postMovies(req, res, next));
router.put("/", (req, res, next) => updateMovie(req, res, next));
module.exports = router;
