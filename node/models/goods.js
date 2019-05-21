/* jshint indent: 2 */
const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("goods", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		url: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		desc: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		sales: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		},
		price: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "0"
		},
		discount: {
			type: Sequelize.STRING(45),
			allowNull: true,
			defaultValue: "0"
		},
		shopid: {
			type: Sequelize.STRING(45),
			allowNull: false
		},
		type: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		specification: {
			type: Sequelize.STRING(800),
			allowNull: true
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		}
	}, {
		tableName: "goods",
		timestamps: false
	});
};
