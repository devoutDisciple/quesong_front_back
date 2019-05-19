/* jshint indent: 2 */
const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("shop", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		type: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		sales: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		},
		desc: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		start_price: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			defaultValue: "0"
		},
		send_price: {
			type: Sequelize.STRING(45),
			allowNull: false,
			defaultValue: "0"
		},
		special: {
			type: Sequelize.STRING(45),
			allowNull: true
		}
	}, {
		tableName: "shop",
		timestamps: false
	});
};
