const mongoose = require('mongoose');
const config = require('./config/environment');

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose.connect(`mongodb://${config.database.user}:${config.database.password}@${config.database.server}:${config.database.port}/${config.database.dbName}`,
      {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error ', err);
      });
  }
}

module.exports = new Database();
