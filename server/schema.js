const { gql } = require('apollo-server');

module.exports = gql`
  type Book {
    title: String
    author: Author
    number: Int!
  }

  type Author {
    id: ID!
    name: String
    books: [Book!]!
  }
  type Query {
    books: [Book]
  }
`;
