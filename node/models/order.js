const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("order", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		shopid: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		order_list: {
			type: "BLOB",
			allowNull: true
		},
		desc: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		toal_price: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		},
		order_time: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		status: {
			type: Sequelize.STRING(45),
			allowNull: true,
			defaultValue: "1"
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		}
	}, {
		tableName: "order",
		timestamps: false
	});
};
