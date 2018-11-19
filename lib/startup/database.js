const mongoose = require('mongoose');
const config = require('config');

class Database {
  connect() {
    return new Promise((resolve, reject) => {
      const user = config.get('database.user'),
        password = config.get('database.password'),
        dbName = config.get('database.dbName'),
        port = config.get('database.port'),
        host = config.get('database.host');
      mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${dbName}`,
        {
          useNewUrlParser: true,
        })
        .then(() => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = new Database().connect();
