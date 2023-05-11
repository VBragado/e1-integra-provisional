const express = require('express');
const app = express();
const stocksRouter = require('./routes/stocks');
const ordersRouter = require('./routes/orders');
const db = require('./db'); // falta implementar

// Set up middleware, such as body-parser and cors

// Set up routes
app.use('/url_grupo/stocks', stocksRouter);
app.use('/url_grupo/ordenes-compra', ordersRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
