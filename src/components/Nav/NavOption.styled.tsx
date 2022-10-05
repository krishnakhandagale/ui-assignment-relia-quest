import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(
    {
      root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        height: '56px',
        textDecoration: 'none',
        overflow: 'hidden',
        background: '#131924',
        '&:hover': {
          filter: 'brightness(120%)',
        },
        '&:active': {
          filter: 'brightness(130%)',
        }
      },
      text: {
        marginLeft: '18px',
        color: 'rgb(255, 255, 255, .92)'
      },
      active: {
        background: '#171E2b',
        '&:hover': {
          filter: 'brightness(110%)',
        },
        '&:active': {
          filter: 'brightness(120%)',
        },
      },
      icon: {
        boxSizing: 'border-box',
        width: '45px',
        minWidth: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    { name: 'NavOption' }
  );