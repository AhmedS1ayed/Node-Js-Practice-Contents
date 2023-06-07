const express = require("express");
const router = express.Router();
const CustomerController = require("../controller/CustomerController");

router.get("/", (req, res, next) =>
  CustomerController.getCustomer(req, res, next)
);
router.post("/", (req, res, next) =>
  CustomerController.postCustomer(req, res, next)
);

module.exports = router;
