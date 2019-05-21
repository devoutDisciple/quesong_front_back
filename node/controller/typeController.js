const express = require("express");
const router = express.Router();
const typeService = require("../services/typeService");

router.get("/all", (req, res) => {
	typeService.getAll(req, res);
});

module.exports = router;
