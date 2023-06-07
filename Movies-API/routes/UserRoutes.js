const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

router.get("/", (req, res, next) => UserController.getUser(req, res, next));
router.post("/", (req, res, next) => UserController.postUser(req, res, next));

module.exports = router;
