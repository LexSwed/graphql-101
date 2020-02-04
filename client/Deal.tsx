import React from 'react';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query getDeal($id: ID!) {
    deal(id: $id) {
      id
      title
    }
  }
`;

const getUser = gql`
  query getUser {
    user {
      id
      name
    }
  }
`;

const Deal: React.FC<{ id: string }> = ({ id }) => {
  const { data: userData, loading: loadingUser } = useQuery(getUser);
  const { data, loading } = useQuery(query, {
    variables: {
      id
    }
  });

  if (loading || loadingUser) {
    return null;
  }

  return (
    <div>
      {data.deal.id} {userData.user.name}
    </div>
  );
};

export default Deal;
