const express = require('express');
const router = express.Router();
const { products, productById, addProduct} = require('../controllers');

router.get('/products', products);
router.get('/products/:id', productById);
router.post('/products', addProduct);

module.exports = router;