/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('free', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    goods_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    shop_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'shop',
        key: 'id'
      }
    },
    campus: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    total: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'free'
  });
};
