const express = require('express');
const {
  registerCustomer,
  loginCustomer,
  fetchAllCustomers,
  fetchCustomerById,
} = require('../controllers');
const router = express.Router();

router.post('/customers', registerCustomer);
router.post('/login', loginCustomer);
router.get('/customers', fetchAllCustomers);
router.get('/customers/:id', fetchCustomerById);

module.exports = router;
