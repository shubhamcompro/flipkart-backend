const router = require('express')
  .Router(); // Router class
const { validateObjectId } = require('./../middleware/objectid-validation');
const { validateUserSchema } = require('./../middleware/joi/user-schema');
const {
  createOrder, updateOrder, getOrder, getOrders,
} = require('./../controllers/order.controller');

router.get('/', getOrders);
router.post('/', validateUserSchema, createOrder);
router.get('/:id', validateObjectId, getOrder);
router.put('/:id', validateObjectId, updateOrder);

module.exports = router;
