const resultMessage = require("../util/resultMessage");
var request = require("request");
// const Sequelize = require("sequelize");
// const Op = Sequelize.Op;
const sequelize = require("../dataSource/MysqlPoolClass");
const user = require("../models/user");
const UserModel = user(sequelize);

module.exports = {
	// 用户登录
	register: (req, res) => {
		try {
			console.log(req.query);
			let query = req.query;
			let appid = query.appid, AppSecret = query.AppSecret, code = query.code, avatarUrl = query.avatarUrl, name = query.name;
			request
				.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${AppSecret}&js_code=${code}&grant_type=authorization_code`,
					async function(error, response, body) {
						let data = JSON.parse(body), openid = data.openid;
						console.log(data);
						console.log(openid);
						console.log(avatarUrl, name);
						let user = await UserModel.findOne({
							where: {
								openid: openid
							}
						});
						if(!user) return await UserModel.create({
							openid: openid,
							name: name,
							avatarUrl: avatarUrl,
						}).then(data => {
							console.log(data);
							res.send(resultMessage.success({
								data: openid
							}));
						});
						return res.send(resultMessage.success({
							data: openid
						}));
					});
		} catch (error) {
			return resultMessage.error([]);
		}
	}
};
