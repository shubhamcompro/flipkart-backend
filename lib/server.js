const express = require('express');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet'); // 14 middleware
const bodyParser = require('body-parser');
const addRequestId = require('express-request-id')();
const config = require('config');
const compression = require('compression');
const dbPromise = require('./startup/database');

const app = express();
app.use(addRequestId);
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

let accessLogStream;
let errorLogStream;


if (app.get('env') === 'development') {
  accessLogStream = process.stdout;
  errorLogStream = process.stderr;
} else if (app.get('env') === 'production') {
  accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' });
  errorLogStream = fs.createWriteStream(path.join(__dirname, '../logs/error.log'), { flags: 'a' });
}

const UserRoutes = require('./routes/users');


// app.use(morgan('dev', {
//   skip(req, res) {
//     return res.statusCode < 400;
//   },
//   stream: errorLogStream,
// }));
//
// app.use(morgan('dev', {
//   skip(req, res) {
//     return res.statusCode >= 400;
//   },
//   stream: accessLogStream,
// }));

app.use('/user', UserRoutes);


dbPromise
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`${config.get('name')} running on port ${process.env.PORT}` || 3000);
    });
  })
  .catch((err) => {
    console.log('failed to connect database', err.toString());
  });

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', (err) => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });
