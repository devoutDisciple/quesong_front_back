const express = require("express");
const router = express.Router();
const positionService = require("../services/positionService");

router.get("/all", (req, res) => {
	positionService.getAll(req, res);
});

module.exports = router;
