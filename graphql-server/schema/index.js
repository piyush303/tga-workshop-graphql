const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        users: [User]
        products: [Product!]!
        product(_id: String): Product
    }

    type Mutation {
        registerUser(user: UserInput): User,
        login(user: LoginInput): String
        addProduct(product: ProductInput): Product
    }

    

    input UserInput {
        name: String
        age: Int
        password: String
        email: String
    }

    input LoginInput {
        email: String
        password: String
    }

    input ProductInput {
      name: String
      category: String
      price: Float!
    }

    type User {
        id: ID
        name: String
        email: String
        age: Int
    }

    type Product {
      id: ID!
      name: String
      category: String
      price: Float!
    }
`;

module.exports =typeDefs;