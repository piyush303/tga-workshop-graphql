const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    customers: [Customer]
    customer(id: ID): Customer
    products: [Product!]!
    product(_id: String): Product
  }

  type Mutation {
    registerCustomer(customer: CustomerInput): Customer
    login(customer: LoginInput): String
    addProduct(product: ProductInput): Product
  }

  input CustomerInput {
    name: String
    password: String
    address: String
    email: String
  }

  input LoginInput {
    email: String
    password: String
  }

  
  type Customer {
    id: ID
    name: String
    email: String
    address: String
  }

  input ProductInput {
    name: String
    category: String
    price: Float!
  }

  type Product {
    id: ID!
    name: String
    category: String
    price: Float!
  }
`;

module.exports = typeDefs;
