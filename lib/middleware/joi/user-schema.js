const Joi = require('joi');

const JioUserSchema = Joi.object()
  .keys({
    firstName: Joi.string()
      .alphanum()
      .required(),
    lastName: Joi.string()
      .alphanum()
      .required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required(),
    role: Joi.string()
      .valid('customer', 'seller', 'admin')
      .required(),
  });


module.exports.validateUserSchema = function (req, res, next) {
  const result = Joi.validate(req.body, JioUserSchema);
  if (result.error) {
    return res.json({
      status: 400,
      error_msg: result.error.toString(),
    });
  }
  next();
};
