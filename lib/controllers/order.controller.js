const _ = require('lodash');
const uuid = require('uuid');
const { Order } = require('../models/index.model');

function _getOrders(req, res, next) {
  Order.find()
    .exec()
    .then(orders => res.json(orders))
    .catch(err => res.status(500)
      .send('Something went wrong'));
}

function _getOrder(req, res, next) {
  Order.findOne({ _id: req.params.id })
    .exec()
    .then(order => res.json(order))
    .catch(err => res.status(500)
      .send('Something went wrong'));
}

function _createOrder(req, res, next) {
  const newOrder = new Order(_.concat(
    {
      orderId: uuid(),
    },
    _.pick(req.body, ['user', 'products']),
  ));

  newOrder.save()
    .then(order => res.json(order))
    .catch(err => res.status(500)
      .send('Something went wrong'));
}

module.exports = {
  createOrder: _createOrder,
  getOrder: _getOrder,
  getOrders: _getOrders,
};
