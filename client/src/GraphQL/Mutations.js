import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
  mutation createUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
      firstName
    }
  }
`;

export const CREATE_DELETE_USER_MUTATION = gql`
  mutation deleteUser($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($id: Int!, $firstName: String!) {
    updateUser(id: $id, firstName: $firstName) {
      id
      firstName
    }
  }
`;
