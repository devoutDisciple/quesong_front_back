const Sequelize = require("sequelize");
module.exports = function(sequelize) {
	return sequelize.define("evaluate", {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		userid: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		shopid: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		desc: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		grade: {
			type: Sequelize.STRING(45),
			allowNull: true
		},
		is_delete: {
			type: Sequelize.STRING(45),
			allowNull: true
		}
	}, {
		tableName: "evaluate",
		timestamps: false
	});
};
