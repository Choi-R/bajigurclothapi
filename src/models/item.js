'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Item.init({
    name: DataTypes.STRING,
    category: Sequelize.STRING,
    price: Sequelize.INTEGER,
    description: Sequelize.STRING,
    image: Sequelize.STRING,
    totalStock: Sequelize.INTEGER,
    totalSold: Sequelize.INTEGER,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};