const { Order } = require('../models/order'); // import the Order model

// Servicio de recepción de órdenes de compra
const createOrder = async (req, res) => {
  const { cliente, sku, fechaEntrega, cantidad, urlNotificacion } = req.body;
  const orderId = req.params.id;
  try {
    // check if the order already exists
    const existingOrder = await Order.findOne({ where: { id: orderId } });
    if (existingOrder) {
      return res.status(400).json({ mensaje: 'Duplicate Orden de Compra' });
    }
    // create a new order
    const order = await Order.create({
      id: orderId,
      cliente,
      sku,
      fechaEntrega,
      cantidad,
      urlNotificacion,
      estado: 'CREATED',
    });
    res.status(201).json(order);
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
    // check if the order exists
    const existingOrder = await Order.findOne({ where: { id: orderId } });
    if (!existingOrder) {
      return res.status(404).json({ mensaje: 'OC no existe' });
    }
    // update the order status
    await Order.update({ estado }, { where: { id: orderId } });
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Server error' });
  }
};

  
  module.exports = {
    createOrder,
    updateOrder,
  };
  