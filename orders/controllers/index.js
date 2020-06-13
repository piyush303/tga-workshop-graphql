const Order = require('../models');

/**
 * add a new product in db
 * @returns newly added product
 * @param {*} req 
 * @param {*} res 
 */
const addOrder = async (req, res) => {
  const { customerId, totalOrderValue, shippingAddress, paymentMethod, products } = req.body;
  try {
    // model
    const newOrder = new Order({
      customerId,
      totalOrderValue,
      shippingAddress,
      paymentMethod,
      products
    });

    const order = await newOrder.save();
    res.status(201).send(order);
  } catch (error) {
    console.log(`Error while adding order, ${error}`);
    res.status(500).send({message: `Error while adding order.`});
  }
}

module.exports = { addOrder };