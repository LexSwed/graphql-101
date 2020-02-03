import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Pipelines from './Pipelines';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Pipelines />
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
