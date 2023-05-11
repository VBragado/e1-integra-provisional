const express = require('express');
const router = express.Router();
//const ordersController = require('../controllers/orders');

router.post('/:id', ordersController.createOrder);
router.patch('/:id', ordersController.updateOrder);

module.exports = router;