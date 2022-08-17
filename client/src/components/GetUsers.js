import React, {useEffect, useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';
import {CREATE_DELETE_USER_MUTATION} from "../GraphQL/Mutations";

const GetUsers = () => {
  const [deleteUser, { errorMutation }] = useMutation(CREATE_DELETE_USER_MUTATION);

  const { error, loading, data, refetch } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  },[data])

  const removeUser = (id) => {
      deleteUser({
        variables: {
          id: id
        },
      });
      refetch();

      if (errorMutation) {
        console.log(errorMutation);
      }
    };

  return (
      <>
        {users.map(({ firstName, lastName, email, id }) => (
            <ul key={`${id} ${firstName}`}>
              <li>{id}</li>
              <li> {firstName}</li>
              <li> {lastName}</li>
              <li>{email}</li>
              {/*<button onClick={() => removeItem(id)}>Remove Me</button>*/}
              <button onClick={() => removeUser(id)}>Remove Me</button>
            </ul>
        ))}
      </>
  );
};

export default GetUsers;
