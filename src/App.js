import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonsContainer } from './containers/PokemonsContainer';
import './App.css';

function App() {
  // pass in an object to Apollo client with the url server
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh/',
  });

  // we're using apollo in App.js to wrap all the components, so that we can use the utility in child components, similar to context api.
  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
