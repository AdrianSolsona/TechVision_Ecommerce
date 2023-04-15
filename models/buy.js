'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      buy.belongsTo(models.order, {
        foreignKey: 'dentist_id'
      });

      buy.belongsTo(models.product, {
        foreignKey: 'pacient_id'
      });
    }
  }
  buy.init({
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'buy',
  });
  return buy;
};