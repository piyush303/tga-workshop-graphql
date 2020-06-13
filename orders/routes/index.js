const express = require('express');
const router = express.Router();
const { addOrder } = require('../controllers');

// router.get('/products', products);
// router.get('/products/:id', productById);
router.post('/orders', addOrder);

module.exports = router;