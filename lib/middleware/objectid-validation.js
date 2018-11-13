const mongoose = require('mongoose');

module.exports = {
  validateObjectId(req, res, next) {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      next();
    } else {
      return res.json({
        status: 400,
        error: 'invalid id',
      });
    }
  },
};
