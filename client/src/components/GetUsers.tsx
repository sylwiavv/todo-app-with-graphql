import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';
import { CREATE_DELETE_USER_MUTATION, UPDATE_USER_MUTATION } from '../GraphQL/Mutations';

type UsersType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const GetUsers = () => {
  const [helloName, setFirstName] = useState<string>('');

  const [deleteUser, errorMutation] = useMutation(CREATE_DELETE_USER_MUTATION);
  const [updateUser, errorMutationSecond] = useMutation(UPDATE_USER_MUTATION);

  const { error, loading, data, refetch } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  const removeUser = (id: number) => {
    deleteUser({
      variables: {
        id: id,
      },
    });
    refetch();

    if (errorMutation) {
      console.log(errorMutation);
    }
  };

  const updateData = (id: number) => {
    updateUser({
      variables: {
        id: id,
        firstName: helloName,
      },
    });

    if (errorMutationSecond) {
      console.log(errorMutationSecond);
    }
  };

  if (loading) return 'Loading...';
  if (error) return console.log(error);

  return (
    <>
      {users.map(({ firstName, lastName, email, id }: UsersType) => (
        <ul key={`${id} ${firstName}`}>
          <li>{firstName}</li>
          <li>{lastName}</li>
          <li>{email}</li>
          {/*<button onClick={() => removeItem(id)}>Remove Me</button>*/}
          <button onClick={() => removeUser(id)}>Remove Me</button>

          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <button onClick={() => updateData(id)}> Upadate Mutation</button>
        </ul>
      ))}
    </>
  );
};

export default GetUsers;
