/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    openid: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    shop_detail: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    order_list: {
      type: DataTypes.STRING(10000),
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    total_price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    discount_price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    order_time: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: '5'
    },
    is_delete: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'order'
  });
};
