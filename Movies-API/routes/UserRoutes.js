const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

router.get("/", (req, res) => UserController.getUser(req, res));
router.post("/", (req, res) => UserController.postUser(req, res));

module.exports = router;
