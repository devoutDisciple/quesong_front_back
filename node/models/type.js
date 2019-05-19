/* jshint indent: 2 */
const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("type", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING(45),
			allowNull: true,
			defaultValue: "美食"
		}
	}, {
		tableName: "type",
		timestamps: false
	});
};
