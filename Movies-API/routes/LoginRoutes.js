const express = require("express");
const router = express.Router();
const LoginController = require("../controller/LoginController");

router.post("/", (req, res) => LoginController.postLogin(req, res));

module.exports = router;