// Servicio de recepción de órdenes de compra
const createOrder = async (req, res) => {
  const { cliente, sku, fechaEntrega, cantidad, urlNotificacion } = req.body;
  const orderId = req.params.id;
  try {
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Server error' });
  }
};

// Servicio de recepción de actualización de orden de compra
const updateOrder = async (req, res) => {
  const { estado } = req.body;
  const orderId = req.params.id;
  try {
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Server error' });
  }
};

  
  module.exports = {
    createOrder,
    updateOrder,
  };
  