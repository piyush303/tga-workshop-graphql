const {
  registerCustomer,
  fetchCustomers,
  fetchCustomerById,
  login,
} = require('../customers');

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
  },
};

module.exports = resolvers;
