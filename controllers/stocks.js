const axios = require('axios');

const getStocks = async (req, res) => {
  try {
    // Make a GET request to retrieve stores information
    const storesResponse = await axios.get('https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/stores');
    const storesData = storesResponse.data;

    // Find the first store with buffer = false
    const targetStore = storesData.find(store => store.buffer === false && store.kitchen === false);

    if (!targetStore) {
      throw new Error('No store found with buffer = false and kitchen = false');
    }

    // Make a GET request to retrieve inventory information for the target store
    const inventoryResponse = await axios.get(`https://dev.api-proyecto.2023-1.tallerdeintegracion.cl/warehouse/stores/${targetStore._id}/inventory`);
    const inventoryData = inventoryResponse.data;

    // Transform the inventory data to match the desired format
    const formattedStocks = inventoryData.map(item => ({
      sku: item.sku,
      total: item.quantity,
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

