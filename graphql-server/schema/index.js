const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    customers: [Customer]
    customer(id: ID): Customer
  }

  type Mutation {
    registerCustomer(customer: CustomerInput): Customer
    login(customer: LoginInput): String
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
`;

module.exports = typeDefs;
