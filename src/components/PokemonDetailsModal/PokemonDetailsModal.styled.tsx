import { Button, ButtonProps, styled } from "@mui/material";
import { createUseStyles } from "react-jss";


export const useStyles = createUseStyles(
    {
        colorBlack: {
            color: 'rgba(0, 0, 0, 0.87)'
        },
        pkmName: {
            color: 'rgb(19, 25, 36)',
            fontWeight: 600,
            fontSize: '32px'
        },
        pkmNumber: {
            color: 'gray',
            fontWeight: 500,
            fontSize: '32px'
        },
        showInlineWithGap: {
            display: 'flex',
            gap: '8px'
        },
        title: {
            color: 'rgba(0, 0, 0, 0.87)',
            display: 'flex',
            gap: '8px'

        }
    },
    {
        name: 'PokemonDetailsModal'
    });


export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: '#FFF',
    backgroundColor: 'rgb(4, 59, 92)',
    '&:hover': {
        backgroundColor: '#171E2b',
    },
}));