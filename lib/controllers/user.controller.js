const _ = require('lodash');
const { User } = require('../models/index.model');

function _getUsers(req, res, next) {
  User.find()
    .exec()
    .then(users => res.json(users))
    .catch(err => err);
}

function _getUser(req, res, next) {
  User.findOne({ _id: req.params.id })
    .exec()
    .then(user => res.json(user))
    .catch(err => err);
}

function _createUser(req, res, next) {
  const newUser = new User(_.pick(req.body, ['firstName', 'lastName', 'email', 'password', 'role']));

  newUser.save()
    .then(user => res.json(user))
    .catch(err => err);
}

function _updateUser(req, res, next) {

}

module.exports = {
  createUser: _createUser,
  updateUser: _updateUser,
  getUser: _getUser,
  getUsers: _getUsers,
};
