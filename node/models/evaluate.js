/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evaluate', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    shopid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    orderid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    openid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    avatarUrl: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    desc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    shop_grade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sender_grade: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    create_time: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    is_delete: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'evaluate'
  });
};
