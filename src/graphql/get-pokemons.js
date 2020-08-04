import gql from 'graphql-tag';
// this is our query / schema, will be used in PokemonsContainer.js
// gql - parses GraphQL query strings
export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;
