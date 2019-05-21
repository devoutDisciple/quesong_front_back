const express = require("express");
const router = express.Router();
const goodsService = require("../services/goodsService");

router.get("/getByShopId", (req, res) => {
	goodsService.getByShopId(req, res);
});

module.exports = router;
