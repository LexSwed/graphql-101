const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    pipelines: [Pipeline]
  }

  type Pipeline {
    id: ID!
    title: String
  }
`;

const resolvers = {
  Query: {
    pipelines: () => []
  }
};

module.exports = {
  typeDefs,
  resolvers
};
