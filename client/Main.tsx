import React from 'react';
import { useQuery, gql, useApolloClient } from '@apollo/client';
import Deal from './Deal';

const getPipelines = gql`
  query getPipelines {
    pipelines {
      id
      name
      deals {
        id
      }
    }
  }
`;

const App: React.FC = () => {
  const { loading, data } = useQuery(getPipelines);
  const client = useApolloClient();

  if (loading) {
    return <div>I'm loading!</div>;
  }

  return (
    <div>
      {data.pipelines[0].deals.map((deal) => {
        return <Deal id={deal.id} />;
      })}
    </div>
  );
};

export default App;
