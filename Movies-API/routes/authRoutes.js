const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.post("/", (req, res, next) => authController.postLogin(req, res, next));

module.exports = router;
