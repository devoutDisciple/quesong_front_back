const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

router.get("/register", (req, res) => {
	userService.register(req, res);
});

module.exports = router;
