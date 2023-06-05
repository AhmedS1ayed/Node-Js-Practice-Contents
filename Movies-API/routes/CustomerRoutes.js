const express = require("express");
const router = express.Router();
const CustomerController = require("../controller/CustomerController");

router.get("/", (req, res) => CustomerController.getCustomer(req, res));
router.post("/", (req, res) => CustomerController.postCustomer(req, res));

module.exports = router;
