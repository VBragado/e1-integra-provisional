const express = require('express');
const app = express();
const path = require('path');
const stocksRouter = require('./routes/stocks');
const ordersRouter = require('./routes/orders');
const db = require('./config/database'); // falta implementar

const { AuthorizationToken } = require('./utils/auth');
const { getStores } = require('./utils/stores');
const { callTest } = require('./utils/test1');

// Set up middleware, such as body-parser and cors
app.use(express.json());

// Set up routes

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/dashboard.html'))
})
app.use('/stocks', stocksRouter);
app.use('/ordenes-compra', express.json(), ordersRouter);



//const dataApp = require('./utils/stocks.js');
//app.use('/', dataApp);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  callTest();
});

