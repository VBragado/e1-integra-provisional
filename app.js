const express = require('express');
const app = express();
const stocksRouter = require('./routes/stocks');
const ordersRouter = require('./routes/orders');
const db = require('./config/database'); // falta implementar

// Set up middleware, such as body-parser and cors

// Set up routes
app.use('/stocks', stocksRouter);
//app.use('/url_grupo/ordenes-compra', ordersRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
