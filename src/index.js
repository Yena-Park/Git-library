import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './style.css';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

require('dotenv').config();
const httpLink= new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`
  },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
  , document.getElementById("root")
);
registerServiceWorker();
