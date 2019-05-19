/* jshint indent: 2 */
const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("campus", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING(45),
			allowNull: false,
			defaultValue: "学校名称"
		}
	}, {
		tableName: "campus",
		timestamps: false
	});
};
