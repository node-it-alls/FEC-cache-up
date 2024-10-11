const path = require('path');
const express = require('express'); // npm installed
const morgan = require('morgan');

const productRouter = require('./routes/productRoutes.js');
const reviewsRouter = require('./routes/reviewsRoutes.js');
const qaRouter = require('./routes/qaRoutes.js');
const interactionsRouter = require('./routes/interactionsRoutes.js');
const cartRouter = require('./routes/cartRoutes.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
// other configuration...

app.use('/products', productRouter);
app.use('/reviews', reviewsRouter);
app.use('/qa', qaRouter);
app.use('/interactions', interactionsRouter);
app.use('/cart', cartRouter);

app.listen(3000);
console.log('server listening on port 3000');
