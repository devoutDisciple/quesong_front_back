/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('campus', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '学校名称'
    },
    is_delete: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'campus'
  });
};
