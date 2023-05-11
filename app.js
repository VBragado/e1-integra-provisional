const express = require('express');
const app = express();
const stocksRouter = require('./routes/stocks');
const ordersRouter = require('./routes/orders');
const authRouter = require('./routes/auth');
const db = require('./config/database'); // falta implementar
const { AuthorizationToken } = require('./utils/auth');

// Set up middleware, such as body-parser and cors

// Set up routes
app.use('/urlgrupo/stocks', stocksRouter);
app.use('/urlgrupo/ordenescompra', ordersRouter);
//app.use('/urlgrupo/auth', authRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  AuthorizationToken();
});
