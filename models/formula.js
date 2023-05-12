const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Formula extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
      }
    }
    Formula.init({
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      Producto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Ingrediente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Formula',
      timestamps: false
    });
    return Formula;
  };
  