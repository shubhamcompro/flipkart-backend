const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('config');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  role: {
    type: String,
    require: true,
  },
});


UserSchema.virtual('fullName')
  .get(function getFullName() {
    return `${this.firstName} ${this.lastName}`;
  });

UserSchema.methods.getInitials = function getInitials() {
  return this.firstName[0] + this.lastName[0];
};


UserSchema.methods.comparePassword = function comparePassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
};


UserSchema.pre('save', function PreSave(next) {
  bcrypt.hash(this.password, config.get('bcrypt.saltRounds'), (err, hash) => {
    if (err) {
      next(err);
    }
    this.password = hash;
    next();
  });
});
module.exports = UserSchema;
