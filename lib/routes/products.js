const router = require('express')
  .Router(); // Router class
const { validateObjectId } = require('./../middleware/objectid-validation');
const { validateUserSchema } = require('./../middleware/joi/user-schema');
const {
  createProduct,  getProduct, getProducts,
} = require('./../controllers/product.controller');

router.get('/', getProducts);
router.post('/', validateUserSchema, createProduct);
router.get('/:id', validateObjectId, getProduct);
// router.put('/:id', validateObjectId, updateProduct);

module.exports = router;
