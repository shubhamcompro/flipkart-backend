const router = require('express')
  .Router(); // Router class
const { validateObjectId } = require('./../middleware/objectid-validation');
const { validateUserSchema } = require('./../middleware/joi/user-schema');
const {
  createUser, updateUser, getUser, getUsers,
} = require('./../controllers/user.controller');

router.get('/', getUsers);
router.post('/', validateUserSchema, createUser);
router.get('/:id', validateObjectId, getUser);
router.put('/:id', validateObjectId, updateUser);

module.exports = router;
