/* jshint indent: 2 */
const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("user", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		openid: {
			type: Sequelize.STRING(255),
			allowNull: false,
			unique: true
		},
		name: {
			type: Sequelize.STRING(255),
			allowNull: false
		},
		avatarUrl: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		phone: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		address1: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		address2: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		address3: {
			type: Sequelize.STRING(255),
			allowNull: true
		}
	}, {
		tableName: "user",
		timestamps: false
	});
};
