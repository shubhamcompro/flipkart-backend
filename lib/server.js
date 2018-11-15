const express = require('express');
const helmet = require('helmet'); // 14 middleware
const bodyParser = require('body-parser');
const config = require('config');
const compression = require('compression');
const dbPromise = require('./database');

const app = express();
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

if (app.get('env') === 'development') {
  const morgan = require('morgan');
  app.use(morgan('tiny'));
}

const UserRoutes = require('./routes/users');


app.use('/user', UserRoutes);


dbPromise
  .then(() => {
    app.listen(3000, () => {
      console.log(config.get('name'));
    });
  })
  .catch((err) => {
    console.log('failed to connect database', err.toString());
  });
