const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class LootBox extends Model {
    static associate() {}
  }
  LootBox.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      available: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'LootBox',
    },
  );
  return LootBox;
};
