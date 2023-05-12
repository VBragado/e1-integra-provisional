const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    static associate(models) {}
  }
  Stock.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vencimiento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lotes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tiempo_prod: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};
