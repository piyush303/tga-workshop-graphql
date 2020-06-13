const Product = require('../models');

/**
 * @return list of all products
 */
const products = async (req, res) => {
  console.log('products');
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(`Error while fetching products ${error}`);
    res.status(500).send({message: 'Error while fetching products'});
  }
};

/**
 * fetches product for given ID
 * @return product by its ID
 * @param {*} req 
 * @param {*} res 
 */
const productById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    res.status(200).send(product);
  } catch (error) {
    console.log(`Error while fetching product for id - ${productId}, ${error}`);
    res.status(500).send({message: `Error while fetching product for id ${productId}`});
  }
};

/**
 * add a new product in db
 * @returns newly added product
 * @param {*} req 
 * @param {*} res 
 */
const addProduct = async (req, res) => {
  const { name, category, price } = req.body;
  console.log('aaa', name, category, price)
  try {
    // model
    const newProduct = new Product({
      name,
      category,
      price
    });

    const product = await newProduct.save();
    res.status(201).send(product);
  } catch (error) {
    console.log(`Error while adding product, ${error}`);
    res.status(500).send({message: `Error while adding product.`});
  }
}

module.exports = { products, productById, addProduct };