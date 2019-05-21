const express = require("express");
const router = express.Router();
const shopService = require("../services/shopService");

// 获取所有商店信息
router.get("/all", (req, res) => {
	shopService.getAll(req, res);
});
router.get("/getById", (req, res) => {
	shopService.getById(req, res);
});

module.exports = router;
