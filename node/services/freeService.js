const resultMessage = require("../util/resultMessage");
const sequelize = require("../dataSource/MysqlPoolClass");
const free = require("../models/free");
const Sequelize = require("sequelize");
const freeModel = free(sequelize);
const Op = Sequelize.Op;
const shop = require("../models/shop");
const shopModel = shop(sequelize);

module.exports = {
	// 获取免费霸王餐
	getFreeGoods: async (req, res) => {
		try {
			let freeGoods = await freeModel.findAll({
				where: {
					is_delete: {
						[Op.not]: ["2"]
					},
					campus: req.query.position
				},
				include: [{
					model: shopModel,
					as: "shopDetail",
					attributes: ["shop_id"]
				}],
				order: [
					// will return `name`  DESC 降序  ASC 升序
					["sort", "ASC"],
				]
			});
			let result = [];
			freeGoods.map(async (item) =>  {
				result.push(item.dataValues);
			});
			res.send(resultMessage.success(result));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
};
