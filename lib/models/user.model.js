const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
