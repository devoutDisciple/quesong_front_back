/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shop', {
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
      allowNull: true
    },
    typeid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    },
    address: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    campus: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: '1'
    },
    sales: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    desc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    start_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    send_price: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '0'
    },
    special: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    start_time: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end_time: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    package_cost: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    sort: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    is_delete: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    invite: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'shop'
  });
};
