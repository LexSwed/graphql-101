const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    pipelines: [Pipeline!]!
    deal(id: ID!, filters: FiltersInput): Deal!
    user: User!
  }

  input FiltersInput {
    userId: ID!
  }

  interface Node {
    id: ID!
  }

  type Pipeline implements Node {
    id: ID!
    name: String
    deals: [Deal!]!
  }

  type Deal implements Node {
    id: ID!
    title: String!
  }

  type DealValue {
    number: Int!
    currency: String!
    combined: String!
  }

  type Stage implements Node {
    id: ID!
    name: String
    flags: StageFlags
    rottenDays: Int
    addTime: String
    updateTime: String
    dealProbability: Int
    pipeline: Pipeline
  }

  type StageFlags {
    active: Boolean!
    rotten: Boolean!
  }

  type Activity implements Node {
    id: ID!
    name: String!
  }

  enum DealStatus {
    OPENED
    DELETED
    WON
    LOST
  }

  type Person {
    fullName: String
    firstTwoLetters: String
  }

  type User {
    id: ID!
    name: String
  }
`;
