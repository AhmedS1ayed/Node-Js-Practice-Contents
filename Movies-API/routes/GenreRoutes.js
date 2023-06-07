const express = require("express");
const router = express.Router();
const GenreController = require("../controller/GenreController");

router.get("/", (req, res, next) => GenreController.getGenre(req, res, next));
router.post("/", (req, res, next) => GenreController.postGenre(req, res, next));

module.exports = router;
