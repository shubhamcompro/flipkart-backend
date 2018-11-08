const express = require('express');
const db = require('./database');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());


app.get('/', function (req, res, next) {
  res.send('Hello World');
});

app.listen(3000, function () {
  console.log(`Example app listening on port 3000!`);
});
