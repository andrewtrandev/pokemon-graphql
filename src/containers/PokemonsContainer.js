import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import { Pokemon } from '../components/Pokemon';

// useQuery hook used to execute queries, useQuery will return an object from Apollo client with loading, error and data props, in this instance the object is returned to pokemons?
// pokemons is assigned to an empty array and data is assigned to an empty object
export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });
  return (
    <div className='container'>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
}
