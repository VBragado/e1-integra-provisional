const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Stock = sequelize.define('Stock', {
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
});

module.exports = Stock;
