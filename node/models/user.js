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
		},
		tolerant_address: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		sex: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		campus: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		floor: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		home: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		username: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		address: {
			type: Sequelize.STRING(255),
			allowNull: true
		},
		table: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		is_delete: {
			type: Sequelize.INTEGER(11),
			allowNull: true,
			defaultValue: "1"
		}
	}, {
		tableName: "user",
		timestamps: false
	});
};
