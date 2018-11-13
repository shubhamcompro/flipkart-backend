const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const UserRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.json());


app.use('/user', UserRoutes);


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
