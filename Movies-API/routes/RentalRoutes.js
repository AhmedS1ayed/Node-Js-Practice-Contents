const express = require("express");
const router = express.Router();
const RentalController = require("../controller/RentalController");

router.get("/", (req, res) => RentalController.getRental(req, res));
router.post("/", (req, res) => RentalController.postRental(req, res));

module.exports = router;
