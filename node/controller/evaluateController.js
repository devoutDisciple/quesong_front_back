const express = require("express");
const router = express.Router();
const evaluateService = require("../services/evaluateService");

// 新增评价
router.get("/addEvaluate", (req, res) => {
	evaluateService.addEvaluate(req, res);
});

module.exports = router;
