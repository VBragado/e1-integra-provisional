//const { Order } = require('../models/order'); // import the Order model
const db = require('../models');
const Order = db.Order;
// Servicio de recepción de órdenes de compra
const createOrder = async (req, res) => {
  console.log(req.body);
  const { cliente, sku, fechaEntrega, cantidad, urlNotificacion } = req.body;
  const orderId = req.params.id;
  try {
    // check if the order already exists
    const existingOrder = await Order.findOne({ where: { id: orderId } });
    if (existingOrder) {
      return res.status(400).json({ mensaje: 'OC ya fue recibida' });
    }
    // create a new order
    const order = await Order.create({
      id: orderId,
      cliente,
      sku,
      fechaEntrega,
      cantidad,
      urlNotificacion,
      estado: 'recibida',
    });
    res.status(201).json(order.toJSON({ exclude: ['createdAt', 'updatedAt'] })); // REVISAR
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Server error' });
  }
};


// Servicio de recepción de actualización de orden de compra
const updateOrder = async (req, res) => {
  const nuevoEstado = req.body.estado;
  console.log(req.body);
  console.log(req.body.estado);
  console.log(nuevoEstado);

  const orderId = req.params.id;
  try {
    // check if the order exists
    const existingOrder = await Order.findOne({ where: { id: orderId } });
    if (!existingOrder) {
      return res.status(404).end(); //revisar .end
    }
    // update the order's estado attribute
    await Order.update({ estado: nuevoEstado }, { where: { id: orderId } });
    res.status(204).end(); //revisar .end
    console.log(nuevoEstado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Server error' });
  }
};

  
  module.exports = {
    createOrder,
    updateOrder,
  };
  