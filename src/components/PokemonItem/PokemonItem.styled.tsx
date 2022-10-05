import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
    {
        pkmListItemCnt: {
            flex: 1,
            flexGrow: 0,
            flexShrink: 0,
            padding: '12px',
            display: 'flex',
            flexDirection: 'row',
            background: 'white',
            border: '1px solid gray',
            borderRadius: '16px',
            flexBasis: 'calc(33.33% - 42px)',
            gap: '12px',
            height: '180px',
            justifyContent: 'space-around',
            overflowX: 'hidden',
            cursor: 'pointer',
            '&:hover':{
                transform: 'scale(1.02)'
            }
        },
        imgCnt: {
            flex: 1
        },
        pkmImage: {
            maxWidth: '100%',
            height: 'auto'
        },
        pkmName: {
            color: 'rgb(19, 25, 36)',
            fontWeight: 600
        },
        pkmNumber: {
            color: 'gray',
            fontWeight: 500
        },
        pkmDetailsCnt: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            justifyContent: 'space-between',
            flex: 1,
            alignItems: 'end'
        },
        pkmDetailsSubCnt: {
            display: 'flex',
            flexDirection: 'row',
            gap: '4px',
            flexWrap: 'wrap'
        },
        pkmTypesCnt: {
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'end'
        },

        [`@media only screen and (max-width: ${600}px)`]: {
            pkmListItemCnt: {
                flexBasis: 'calc(100% - 48px)'
            },
            pkmImage:{
                maxWidth: '50%'
            }
          },
          [`@media only screen and (min-width: ${600}px)`]: {
            pkmListItemCnt: {
                flexBasis: 'calc(100% - 48px)'
            },
            pkmImage:{
                maxWidth: '50%'
            }
          },
        [`@media only screen and (min-width: ${768}px)`]: {
            pkmListItemCnt: {
                flexBasis: 'calc(100% - 48px)'
            },
            pkmImage:{
                maxWidth: '50%',
            }
        },
        [`@media only screen and (min-width: ${992}px)`]: {
            pkmListItemCnt: {
                flexBasis: 'calc(50% - 48px)'
            }
        },
        [`@media (min-width: ${1200}px)`]: {
            pkmListItemCnt: {
                flexBasis: 'calc(33.33% - 48px)'
            }
        }
    },
    { name: 'PokemonListItem' }
);

