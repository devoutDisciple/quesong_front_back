/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sales: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    discount: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    shopid: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    package_cost: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    specification: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'goods'
  });
};
