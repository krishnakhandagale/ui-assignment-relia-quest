import { PokemonList } from '../components';
import { useStyles } from './ListPage.styled';

const ListPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PokemonList />
    </div>
  );
};

export default ListPage;
