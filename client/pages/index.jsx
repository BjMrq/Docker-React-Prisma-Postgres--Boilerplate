import React from 'react';
import fetch from 'node-fetch';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { gql } from 'apollo-boost';
import App from '../src/components/App';

// ApolloClient use fetch but since it's a Next app, fetch is not defined in global we need to add it using node-fetch
global.fetch = fetch;

const client = new ApolloClient({ uri: process.env.BROWSER_GRAPHQL_SERVER_URL });

const rootPage = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default rootPage;
