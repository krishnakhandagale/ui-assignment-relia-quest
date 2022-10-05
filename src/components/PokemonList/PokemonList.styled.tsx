import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
    {
        pkmListCnt: {
            width: '100%',
            textAlign: 'center',
            padding: '32px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            gap: '24px',
            flexWrap: 'wrap',
            color: 'white'
        }
    },
    { name: 'PokemonList' }
);

