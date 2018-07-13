import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from "react-apollo";
import { createApolloClient } from "./src/store";
const client = createApolloClient();

import MainPage from './src/components/MainPage/MainPage.container';

export default class App extends React.Component {
  
  render() {
    return (
      <ApolloProvider client={client}>
        <MainPage/>
      </ApolloProvider>
    );
  }
}