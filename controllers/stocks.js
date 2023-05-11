const { Stock } = require('../models/order');

const getStocks = async (req, res) => {
  try {
    // Retrieve the total stock for each SKU from the database
    const stocks = await Stock.findAll({
      attributes: ['sku', [sequelize.fn('sum', sequelize.col('cantidad')), 'total']],
      group: 'sku',
    });

    // Format the response as an array of objects
    const formattedStocks = stocks.map((stock) => ({
      sku: stock.sku,
      total: stock.get('total'),
    }));

    // Send the response
    res.status(200).json(formattedStocks);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getStocks,
};
