const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers: [resolvers],
  mocks: true,
  mockEntireSchema: false
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
