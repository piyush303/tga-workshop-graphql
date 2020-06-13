const {registerUser, fetchUsers, login} = require('../users');
const { getProducts, getProductById, addNewProduct } = require('../products');

const resolvers = {
    Query: {
        users: (parent, args, context) => {
            const {me} = context;
            console.log('---me----',me);
            
          const users =   fetchUsers();
          return users;
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
        registerUser: async (parent, args) => {
            const user = await registerUser(args.user);
            return user;
        },
        login: async (parent, args) => {
            const token = await login(args.user);
            return token;
        },

        addProduct: async (parent, args) => {
          // console.log('dsaadas', args);
          const product = await addNewProduct(args.product);
          return product;
        }
    },
    
}

module.exports = resolvers;