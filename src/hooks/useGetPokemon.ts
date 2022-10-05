

import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { PokemonDetails, PokemonDetailsOption } from './types';

const GET_POKEMON = gql`
    query pokemon($id: String, $name: String){
        pokemon(id: $id, name: $name){
        id
        number
        name
        weight{
            minimum
            maximum
        }
        height{
            minimum
            maximum
        }
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
        }
    }
`;

export const useGetPokemon = (id: string = "", name: string = "") => {
    const { data, ...queryRes } = useQuery(GET_POKEMON, {
        variables: {
            id, name
        },
    });

    const pokemonDetailsOption: PokemonDetailsOption = useMemo(() => data?.pokemon, [data]);

    const pokemonDetails: PokemonDetails | null = useMemo(() =>
    (pokemonDetailsOption ? {
        id: pokemonDetailsOption.id,
        name: pokemonDetailsOption.name,
        classification: pokemonDetailsOption.classification,
        fleeRate: pokemonDetailsOption.fleeRate, height: {
            maximum: pokemonDetailsOption.height.maximum,
            minimum: pokemonDetailsOption.height.minimum
        },
        image: pokemonDetailsOption.image,
        maxCP: pokemonDetailsOption.maxCP,
        maxHP: pokemonDetailsOption.maxHP,
        number: pokemonDetailsOption.number,
        resistant: pokemonDetailsOption.resistant,
        types: pokemonDetailsOption.types,
        weaknesses: pokemonDetailsOption.weaknesses,
        weight: {
            minimum: pokemonDetailsOption.weight.minimum,
            maximum: pokemonDetailsOption.weight.maximum

        }
    } : null), [pokemonDetailsOption]);

    return {
        pokemonDetails,
        ...queryRes,
    };
};
