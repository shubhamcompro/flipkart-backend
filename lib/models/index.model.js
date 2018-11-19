const mongoose = require('mongoose');
const UserSchema = require('./user.schema');
const ProductSchema = require('./product.schema');
const CategorySchema = require('./category.schema');
const OrderSchema = require('./order.schema');


module.exports = {
  User: mongoose.model('User', UserSchema),
  Order: mongoose.model('Order', OrderSchema),
  Category: mongoose.model('Category', CategorySchema),
  Product: mongoose.model('Product', ProductSchema),
};
