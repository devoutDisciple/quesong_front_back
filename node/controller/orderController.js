const express = require("express");
const router = express.Router();
const orderService = require("../services/orderService");

// 增加订单
router.post("/add", (req, res) => {
	orderService.addOrder(req, res);
});
// 获取订单通过openid  getList
router.get("/getListById", (req, res) => {
	orderService.getList(req, res);
});
module.exports = router;
