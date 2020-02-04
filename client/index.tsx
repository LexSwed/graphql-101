import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client';

import Main from './Main';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({})
});

client.query({
  query: gql`
    query {
      deal(id: "1") {
        id
        title
      }
    }
  `
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
