const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
      }
    }
    Product.init({
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      SKU: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LoteProduccion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Costo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Tiempo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Product',
      timestamps: false
    });
    return Product;
  };
  