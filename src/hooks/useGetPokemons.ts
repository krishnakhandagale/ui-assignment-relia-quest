import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Pokemon, PokemonOption } from './types';

const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
      number
    }
  }
`;

export const useGetPokemons = () => {
  const { data, ...queryRes } = useQuery(GET_POKEMONS, {
    variables: {
      first: 151
    },
  });

  const pokemonOptions: PokemonOption[] = useMemo(() => data?.pokemons || [], [data]);

  const pokemons: Pokemon[] = useMemo(
    () => pokemonOptions.map((p: Pokemon) => ({
      id: p.id, name: p.name, image: p.image,
      types: p.types, number: p.number
    })),
    [pokemonOptions]
  );

  return {
    pokemons,
    ...queryRes,
  };
};
