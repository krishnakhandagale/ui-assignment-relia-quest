import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
    {
        colorValue: {
            color: '#00000099'
        },
        pkmImageCnt: {
            padding: '12px',
            display: 'flex',
            flexDirection: 'row',
            background: 'white',
            flexBasis: 'calc(33.33% - 42px)',
            gap: '12px',
            height: '240px',
            overflowX: 'hidden',
            justifyContent: 'center',
            borderBottom: '1px solid #80808059',
            marginBottom: '16px'
        },
        pkmImage: {
            maxWidth: '100%',
            height: 'auto',
            animation: 'zoom-in 0.2s ease'
        },
        pkmDetailsCnt: {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        },
        pkmDetailsSubCnt: {
            display: 'flex',
            flexDirection: 'row',
            gap: '4px'
        },
        chipsContainer: {
            display: 'flex',
            flexDirection:'column',
            gap: '12px',
            color: 'black',
            fontSize: '16px',
            fontWeight: '500',
            flexWrap: 'wrap',
            '& div':{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap'
            }
        },
        label: {
            color: 'black',
            fontSize: '18px',
            display: 'flex',
            flexDirection: 'row',
            gap: '4px'
        },
        classificationCnt: {
            color: 'black',
            fontSize: '24px'
        }
    },
    { name: 'PokemonDetails' }
);

