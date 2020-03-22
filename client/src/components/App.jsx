import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getUsers = gql`
query {
  users {
  id
  name
}
}`;

const App = () => {

  const {
    loading, error, data
  } = useQuery(getUsers);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return data.users.map(user => (
    <div key={user.id}>
      <p>
        {user.name}
      </p>
    </div>
  ));

};

export default App;
