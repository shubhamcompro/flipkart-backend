const _ = require('lodash');
const { Category } = require('../models/index.model');

function _getCategories(req, res, next) {
  Category.find()
    .exec()
    .then(users => res.json(users))
    .catch(err => err);
}

function _createCategory(req, res, next) {
  const newCategory = new Category(_.pick(req.body, ['name']));

  newCategory.save()
    .then(category => res.json(category))
    .catch(err => err);
}

function _deleteCategory(req, res, next) {
  Category.findOne({ _id: req.params.id })
    .remove()
    .exec()
    .then(status => res.json(status))
    .catch(err => err);
}

module.exports = {
  createCategory: _createCategory,
  getCategories: _getCategories,
  deleteCategory: _deleteCategory,
};
