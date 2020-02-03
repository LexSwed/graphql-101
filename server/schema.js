const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    pipelines: [Pipeline!]!
    deal(id: ID!, filters: FiltersInput): Deal!
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
    urlTitle: String
    active: Boolean
    addTime: String
    updateTime: String
    selected: Boolean
    deals: [Deal!]!
  }

  type Deal implements Node {
    id: ID!
    active: Boolean!
    addTime: String
    closeTime: String
    deleted: Boolean!
    label: String
    lastActivity: Activity
    nextActivity: Activity
    lostReason: String
    lostTime: String
    probability: Int
    rottenTime: String
    stage: Stage
    status: DealStatus
    title: String!
    updateTime: String
    valueObject: DealValue
    value: Int
    wonTime: String
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
`;
