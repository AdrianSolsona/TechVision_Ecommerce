'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      order.hasMany(models.buy, {
        foreignKey: 'order_id'
      });
    }
  }
  order.init({
    user_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};