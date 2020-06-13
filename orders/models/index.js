const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  customerId: {
    type: String
  },
  totalOrderValue: {
    type: Number
  },
  shippingAddress: {
    type: String
  },
  paymentMethod: {
    type: String
  },
  products: {
    type: [String]
  }
});

module.exports = mongoose.model('Order', productSchema);