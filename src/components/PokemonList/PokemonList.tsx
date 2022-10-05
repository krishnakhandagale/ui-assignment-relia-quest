import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NO_POKEMONS_FOUND, SEARCH_PLACEHOLDER } from '../../constants/strings';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { Loader } from '../Loader';
import { PokemonItem } from '../PokemonItem';
import { SearchBox } from '../SearchBox';
import { Toast } from '../Toast/Toast';
import { useStyles } from './PokemonList.styled';

export const PokemonList = () => {

  const classes = useStyles();

  const { pokemons, loading, error } = useGetPokemons();

  const [pokemonList, setPokemonList] = useState(pokemons);

  useEffect(() => {
    setPokemonList(pokemons);
  }, [pokemons]);

  const onSearchQueryChange = useCallback((query: string) => {
    const result = pokemons.filter((el) => {

      const typeIndex = el.types.findIndex(element => {
        return element.toLowerCase().includes(query.toLowerCase());
      });

      return el.name.toLowerCase().includes(query) || typeIndex > -1;
    });

    setPokemonList(result);
  }, [pokemons]);

  return (
    <div className={classes.pkmListCnt}>
      <SearchBox placeholder={SEARCH_PLACEHOLDER}
        onChange={onSearchQueryChange} isCaseInsensitive />
      {loading && <Loader size='sm'></Loader>}
      {pokemonList?.length ? pokemonList.map((pkmn) => (
        <PokemonItem key={pkmn.id} {...pkmn} />
      )) : (!loading && NO_POKEMONS_FOUND)}
      <Outlet />
      <Toast message={error?.message} opened={!!error?.message}
        severity={"error"}></Toast>
    </div>
  );
};


