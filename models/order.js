// ESTE MODELO NO SE NECESITA, HACEMOS GET /ordenes/:idOrden
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sku: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechaEntrega: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  urlNotificacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('CREATED', 'IN_PROGRESS', 'COMPLETED'),
    allowNull: false,
    defaultValue: 'CREATED',
  },
});

module.exports = Order;
