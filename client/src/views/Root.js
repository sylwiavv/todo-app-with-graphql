import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {MainLayout} from "../components/MainLayout";
import {GlobalStyle} from "../assets/styles/GlobalStyles";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import Form from '../components/Form';
import GetUsers from "../components/GetUsers";
import {DataRaport} from "../components/DataReport";

const errorLink = onError(({ graphQLErrors}) => {
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

const Root = () => (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Form/>}/>
                        <Route path="/users" element={<GetUsers/>}/>
                        <Route path="/data-raport" element={<DataRaport/>}/>
                    </Routes>
                </MainLayout>
            </ThemeProvider>
        </BrowserRouter>
    </ApolloProvider>
);

export default Root;
