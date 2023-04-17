'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
    }
  }
  Address.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    postcode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};