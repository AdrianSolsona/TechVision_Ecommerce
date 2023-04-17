'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.category, {
        foreignKey: 'category_id'
      });
      product.hasMany(models.buy, {
        foreignKey: 'product_id'
      });
    }
  }
product.init({
    category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    image: DataTypes.STRING,
    render: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};