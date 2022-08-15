import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';

import { onError } from '@apollo/client/link/error';
import GetUsers from '../components/GetUsers';
import Form from '../components/Form';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.log(`GraphQL error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: 'http://localhost:9090/graphql' })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Products list</h1>
        <Form />
        <GetUsers />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Root;
