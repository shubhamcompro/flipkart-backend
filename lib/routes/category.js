const router = require('express')
  .Router(); // Router class
const { validateUserSchema } = require('./../middleware/joi/user-schema');
const { validateObjectId } = require('./../middleware/objectid-validation');
const {
  createCategory, getCategories, deleteCategory
} = require('./../controllers/category.controller');

router.get('/', getCategories);
router.post('/', validateUserSchema, createCategory);
router.delete('/:id', validateObjectId, deleteCategory);

module.exports = router;
