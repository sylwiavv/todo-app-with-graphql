import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';

const GetUsers = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
  return (
      <>
        {users.map(({ firstName, lastName, email, id }) => (
            <ul key={id}>
              <li>{id}</li>
              <li> {firstName}</li>
              <li> {lastName}</li>
              <li>{email}</li>
            </ul>
        ))}
      </>
  );
};

export default GetUsers;
