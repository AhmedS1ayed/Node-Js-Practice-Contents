const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.post("/", (req, res) => authController.postLogin(req, res));

module.exports = router;
