const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = CategorySchema;
