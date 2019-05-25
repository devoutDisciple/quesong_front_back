const resultMessage = require("../util/resultMessage");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const sequelize = require("../dataSource/MysqlPoolClass");
const shop = require("../models/shop");
const ShopModel = shop(sequelize);

module.exports = {
	// 获取所有商店列表
	getAll: async (req, res) => {
		try {
			let swiper = await ShopModel.findAll({
				where: {
					is_delete: {
						[Op.not]: ["2"]
					},
					campus: req.query.position
				},
				order: [
					// will return `name`  DESC 降序  ASC 升序
					["sort", "ASC"],
				]
			});
			let result = [];
			swiper.map(item => {
				result.push(item.dataValues);
			});
			res.send(resultMessage.success(result));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
	// 通过id获取制定商店
	getById: async (req, res) => {
		let id = req.query.id;
		try {
			let shop = await ShopModel.findOne({
				where: {
					id: id
				}
			});
			res.send(resultMessage.success(shop));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
	// 通过type类型获取商店
	getShopByType: async (req, res) => {
		let id = req.query.id;
		try {
			let shop = await ShopModel.findAll({
				where: {
					typeid: id,
					campus: req.query.position
				},
				order: [
					// will return `name`  DESC 降序  ASC 升序
					["sort", "ASC"],
				]
			});
			res.send(resultMessage.success(shop || []));
		} catch (error) {
			console.log(error);
			return res.send(resultMessage.error([]));
		}
	},
};
