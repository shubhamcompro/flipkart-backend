const mongoose = require('mongoose');
const ProductSchema = require('./product.schema');

const { Schema } = mongoose;

const itemSchema = new Schema({
  product: ProductSchema,
  quantity: {
    type: Number,
    require: true,
  },
});

const OrderSchema = new Schema({
  orderId: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  products: {
    type: [itemSchema],
    required: true,
  },
});


module.exports = OrderSchema;
