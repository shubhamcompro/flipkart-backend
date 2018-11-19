const _ = require('lodash');
const { Product } = require('../models/index.model');

function _getProducts(req, res, next) {
  Product.find()
    .exec()
    .then(products => res.json(products))
    .catch(err => res.status(500)
      .send('Something went wrong'));
}

function _getProduct(req, res, next) {
  Product.findOne({ _id: req.params.id })
    .exec()
    .then(product => res.json(product))
    .catch(err => res.status(500)
      .send('Something went wrong'));
}

function _createProduct(req, res, next) {
  const newProduct = new Product(_.pick(req.body, [
    'title', 'slug', 'price', 'description', 'images', 'category', 'tags',
  ]));

  newProduct.save()
    .then(product => res.json(product))
    .catch(err => res.status(500)
      .send('Something went wrong'));
}


function _updateProduct(req, res, next) {

}


module.exports = {
  createProduct: _createProduct,
  updateProduct: _updateProduct,
  getProduct: _getProduct,
  getProducts: _getProducts,
};
