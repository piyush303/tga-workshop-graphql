const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3200/'
});

const addNewProduct = async (product) => {
  console.log('product', product);
  try {
      const {data} = await instance.post('/products',{
          name: product.name,
          category: product.category,
          price: product.price
      })
      return { ...data, id: data._id.toString() };
  } catch (e) {
      console.error('---error adding product--',e);
    throw e;
  }
}

const getProducts = async () => {
  try {
    const {data} = await instance.get('/products');
    return data.map(product => {
      return { ...product, id: product._id.toString()}
    })
  } catch (error) { 
    console.log(error);
  }
}

const getProductById = async (id) => {
  console.log('id', id);
  try {
      const {data} = await instance.get(`/products/${id}`);
      return { ...data, id: data._id.toString() };
  } catch (error) {
    console.log(error);
    
  }
}



module.exports = { addNewProduct, getProducts, getProductById }