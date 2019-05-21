/* jshint indent: 2 */
const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("swiper", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			primaryKey: true
		},
		url: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		shopid: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: "swiper",
		timestamps: false
	});
};
