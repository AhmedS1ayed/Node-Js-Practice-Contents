const express = require("express");
const router = express.Router();
const GenreController = require("../controller/GenreController");

router.get("/", (req, res) => GenreController.getGenre(req, res));
router.post("/", (req, res) => GenreController.postGenre(req, res));

module.exports = router;
