const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  slug: {
    type: String,
    unique: true,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  images: {
    type: Array,
    require: true,
    default: [],
  },
  category: {
    type: String,
    require: true,
  },
  tags: {
    type: Array,
    require: true,
    default: [],
  },
});

module.exports = ProductSchema;
