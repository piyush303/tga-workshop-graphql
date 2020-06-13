const {
  registerCustomer,
  fetchCustomers,
  fetchCustomerById,
  login,
} = require('../customers');
const { getProducts, getProductById, addNewProduct } = require('../products');

const resolvers = {
  Query: {
    customers: (parent, args, context) => {
      const { me } = context;
      console.log('---me----', me);

      return fetchCustomers();
    },
    customer: (parent, args) => {
      return fetchCustomerById(args.id);
    },


    products: async (parent, args) => {
      const products = await getProducts();
      return products;
    },

    product: async (parent, args) => {
      const product = await getProductById(args._id);
      return product;
    }
  },
  Mutation: {
    registerCustomer: async (parent, args) => {
      const customer = await registerCustomer(args.customer);
      return customer;
    },
    login: async (parent, args) => {
      const token = await login(args.customer);
      return token;
    },

    addProduct: async (parent, args) => {
      // console.log('dsaadas', args);
      const product = await addNewProduct(args.product);
      return product;
    }
  },
};

module.exports = resolvers;
