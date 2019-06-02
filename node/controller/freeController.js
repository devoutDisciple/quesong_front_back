const express = require("express");
const router = express.Router();
const freeService = require("../services/freeService");

// 获取所有免费霸王餐
router.get("/getFreeGoods", (req, res) => {
	freeService.getFreeGoods(req, res);
});


module.exports = router;
