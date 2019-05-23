const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

// 用户注册，返回openid
router.get("/register", (req, res) => {
	userService.register(req, res);
});
// 填写收货地址
router.post("/addAddress", (req, res) => {
	userService.addAddress(req, res);
});

module.exports = router;
