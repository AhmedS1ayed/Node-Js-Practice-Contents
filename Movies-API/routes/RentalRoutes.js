const express = require("express");
const router = express.Router();
const RentalController = require("../controller/RentalController");

router.get("/", (req, res, next) => RentalController.getRental(req, res, next));
router.post("/", (req, res, next) =>
  RentalController.postRental(req, res, next)
);

module.exports = router;
